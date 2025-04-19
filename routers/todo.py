from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import Optional
from fastapi import Query
import models
import schemas
import database



router = APIRouter(prefix="/todos", tags=["todos"])

# Dependency to get the database session
db_dependency = Depends(database.get_db)

@router.get("/", response_model=list[schemas.Todo])
def get_todos(db: Session = db_dependency):
    return db.query(models.Todo).all()

@router.post("/", response_model=schemas.Todo)
def create_todo(todo: schemas.TodoCreate, db: Session = db_dependency):
    new_todo = models.Todo(**todo.dict())
    db.add(new_todo)
    db.commit()
    db.refresh(new_todo)
    return new_todo

@router.put("/{todo_id}", response_model=schemas.Todo)
def update_todo(todo_id: int, todo: schemas.TodoUpdate, db: Session = db_dependency):
    existing_todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()
    if not existing_todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    
    for key, value in todo.dict(exclude_unset=True).items():
        setattr(existing_todo, key, value)
    
    db.commit()
    db.refresh(existing_todo)
    return existing_todo  # ✅ Make sure you're returning a valid object!


@router.delete("/{todo_id}")
def delete_todo(todo_id: int, db: Session = db_dependency):
    existing_todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()
    if not existing_todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    db.delete(existing_todo)
    db.commit()
    return {"detail": "Todo deleted"}
from sqlalchemy.orm import Session
from .models import TodoItem
from .schemas import TodoCreate

def get_todos(db: Session):
    return db.query(TodoItem).all()

def get_todo(db: Session, todo_id: int):
    return db.query(TodoItem).filter(TodoItem.id == todo_id).first()

def create_todo(db: Session, todo: TodoCreate):
    db_todo = TodoItem(**todo.dict())
    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)
    return db_todo

def update_todo(db: Session, todo_id: int, todo: TodoCreate):
    db_todo = db.query(TodoItem).filter(TodoItem.id == todo_id).first()
    if db_todo:
        db_todo.title = todo.title
        db_todo.completed = todo.completed
        db.commit()
        db.refresh(db_todo)
    return db_todo

def delete_todo(db: Session, todo_id: int):
    db_todo = db.query(TodoItem).filter(TodoItem.id == todo_id).first()
    if db_todo:
        db.delete(db_todo)
        db.commit()
    return db_todo
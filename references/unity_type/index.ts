
// UNITY TYPE



// Partial<Type>
// Constructs a type with all properties of Type set to optional. This utility(Tiện ích) will return a type that represents all subsets of a given type.
// kiểu này sẽ trả về đại diện của các tập con của nó
// Partial - typescript 2.1
// Partial cho phép thế hiện tất cả các tập hợp con của đối tượng được truyền vào.
// tương tự như spread oparator trong es6, dùng để nối mảng, object,...
// spread được dùng để nối chuối, mảng,...{...spreadArray}
// rest dùng đề truyền tham số không xác định

interface Todo {
    title?:string; // nếu có ? thì props có thể có hoặc không.
    description?:string;
}

function updateTodoInterface(fieldToUpdate : Todo){
    return {...fieldToUpdate}; // spread oparator dùng để nối mảng hoặc update mảng
}

function updateTodo(fieldToUpdate : Partial<Todo>){
    return {...fieldToUpdate};
}

const todo1 = {
    description:'Mô tả'
}
// nếu xử dụng interface sẽ được thông báo lỗi thiếu trường
updateTodoInterface(todo1); 
updateTodo(todo1) // thục hiện cover tất cả các tập con của interface được khai báo.



// Required<type> : yêu cầu đối só phải đầy đủ props
// Required type
// Required type ngược lại với Partial
// Yêu cầu phải đầy đủ các trường.

interface RequireType{
    title?:string,
    des?:string
}
const required_1 : RequireType =  {title : 'xin chào'}; 
// const required_2 : Required<RequireType> = {title : 'Hello'} // lỗi thiếu props, des is missing




// Readonly<type> nghĩa là cấu trúc props sẽ không thể thay đổi.
// không thể chỉ định các thuộc tính trong class hoặc interface 

interface TodoReadOnly {
    title?:string;
}

const todoReadOnly : Readonly<TodoReadOnly> = {
    title : 'hihi' // đối tượng lúc này đã được cố định và không được gán lại.  
}

// todoReadOnly.title = 'hihi'; // cannot assign title. không thể cấu trúc hoặc định nghĩa lại title.







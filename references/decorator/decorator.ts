// decorator là một tính năng thử nghiệm của typescript dùng đề bổ sung tính năng hoặc props cho các kịch bản đã có sẵn.

// Lưu ý : Decorator là một tính năng thử nghiệm, và có thể sẽ thay đổi trong các phiên bản sau này
// bật chế độ dùng thử nghiệm decorator bằng cách 

// 1. install : tsc --target ES5 --experimentalDecorators
/* 2. tsconfig.jcon add {
  "compilerOptions": {
    "experimentalDecorators": true
  }
} */


// Factory decorator
// factory decorator trả về một decorator factory.
function color(value:string){
    // Đây là cách thiết lập factory decorator
    // factory function trả về decorator là 1 function.
    return function(targer){}
}

// Decorator compotion
function first(){
    console.log('first() : function main');
    return function(target : unknown, propertyKey:string, descriptor : PropertyDecorator){
        console.log('first() : results decoratorer return');
    }
}

function second(){
    console.log('second() : function main');
    return function(target : unknown, propertyKey:string, descriptor : PropertyDescriptor){
        console.log('second() : results decoratorer return');
    }
}

// 1
const decorator = (arg:unknown) : PropertyDecorator => {
    return (target, propertyKey) => {   
        console.log('target : ', target); // Target 
        console.log('arg : ', arg); // string
        console.log('property : ' , propertyKey);
        // target is class testDecorator, arg : string, property : foo
    }
}
 
// tương tự như 
class testDecorator{
    @decorator('string') // target is class testDecorator, arg : string, property : foo
    // @first()
    // @second()
    // foo : string;
}
// tương tụ 1
decorator('string')(testDecorator.prototype,'foo');

var obj ={
    name:"Hoa",
    age:"22",
    getname: function(param1, param2) {
        console.log(`Hello ${this.name}`);
        console.log(`Param:`, param1, param2)
    }
}
obj.getname();
obj.getname.call({name: `Yến Phượng`},"Xin Chào","2017");
obj.getname.apply({name:`Yến Phượng`},["XIn CHào","2018"]);

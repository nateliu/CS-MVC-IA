var studyModule = angular.module("angularstudy",[]);

studyModule.directive("angularstudyClock",function(){
	return {
		restrict : "E",
		replace : true,
		template : "<div></div>",
		link : function(scope,element,attrs){
			setInterval(function(){
				var d = new Date();
				element.text(d.toString());
			},1000);
		}
	};
});

studyModule.directive("angularstudyNameCard",function(){
	return {
		restrict : "E",
		replace : true,
		template : "<div></div>",
		link : function(scope,element,attrs){
			var person = scope.$eval(attrs.data);
	/*		element.append("<div>name : " + person.name + "</div>")
				   .append("<div>gender : " + person.gender + "</div>")
				   .append("<div>age : " + person.age + "</div>");	*/

			element.append("<div>name : <span class='name'></span></div>")
				.append("<div>gender : <span field='gender'></span></div>")
				.append("<div>age : <span field='age'></span></div>");

			//Listening the person and update the DOM
			scope.$watch(attrs.data,function(nv,ov){
				var fields = element.find("span");
				fields[0].textContent = nv.name;
				fields[1].textContent = nv.gender;
				fields[2].textContent = nv.age;
			},true);

			//chang the age per second.
			setInterval(function(){
				scope.$apply("person.age=person.age+1;")
			},1000);
		}
	};
});


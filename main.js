(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{Xv:()=>m,f8:()=>i,Zu:()=>a,Ie:()=>s,F4:()=>r});let t=()=>{a.forEach((function(e){let t=a.indexOf(e);e.addEventListener("click",(function(){console.log(r[t]),r[t].style.display="block",m[t].style.display="block",e.style.display="none"}))})),m.forEach((function(e){let t=m.indexOf(e);e.addEventListener("click",(function(){console.log(r[t]),r[t].style.display="none",a[t].style.display="block",e.style.display="none"}))}))},n=e=>{if(""!==e){let n=new l(e,0);n.addProject();let o=document.getElementById("container"),d=document.createElement("div"),c=document.createElement("h2"),i=document.createElement("h4");i.setAttribute("id",`${n.title}TodosCount`);let s=document.createElement("img"),u=document.createElement("img"),y=document.createElement("div");s.src="icons/angle-small-right.svg",u.src="icons/angle-small-down.svg",c.textContent=n.title,i.textContent=`${n.todosNumber} Todos in this project`,o.appendChild(d),d.setAttribute("id",`${c.textContent}`),d.appendChild(y),y.appendChild(c),y.appendChild(i),y.appendChild(s),y.appendChild(u),s.classList.add("show"),a.push(s),u.classList.add("close"),m.push(u),y.classList.add("projectTitleDiv");let p=document.createElement("div");p.classList.add("todosContainer"),r.push(p),d.appendChild(p),t()}},o=(e,t,n)=>{if(""!=e&&""!=t){let o=new d(e,t,n),l=document.createElement("div");l.classList.add("todoDiv"),l.setAttribute("id",`${o.id}`);let c=document.createElement("h3"),s=document.createElement("div");s.classList.add("todoTitleDiv"),c.textContent=o.title,l.appendChild(s),s.appendChild(c),o.addTodo(),i.forEach((function(e){t===e.title&&(document.getElementById(`${e.title}`).lastChild.appendChild(l),e.todosNumber+=1,e.todoCount())}));let a=document.createElement("button");a.classList.add("add"),a.textContent="Add",s.appendChild(a),o.add=a,o.addAttribute()}};class d{constructor(e,t,n,o,d,l,c,i,s){this.title=e,this.projectParent=t,this.id=n,this.description=o,this.dueDate=d,this.priority=l,this.notes=c,this.checklist=i,this.add=s}addTodo(){s.push(this)}addAttribute(){this.add.onclick=()=>{document.getElementById("addAttributeForm").style.display="flex"}}}class l{constructor(e,t){this.title=e,this.todosNumber=t}addProject(){i.push(this)}todoCount(){console.log(this),document.getElementById(`${this.title}TodosCount`).textContent=`${this.todosNumber} Todos in this project`}}let c=0,i=[],s=[],a=[...document.getElementsByClassName("show")],m=[...document.getElementsByClassName("close")],r=[...document.getElementsByClassName("todosContainer")];document.getElementById("createProject").onclick=()=>{let e=document.getElementById("projectTitle").value;n(e),document.getElementById("newProjectForm").style.display="none",document.getElementById("container").style.opacity="1"},document.getElementById("createTodo").onclick=()=>{let e=document.getElementById("todoTitle").value,t=document.getElementById("projectParent").value;o(e,t,c),++c,document.getElementById("newTodoForm").style.display="none",document.getElementById("container").style.opacity="1"},document.getElementById("addAttribute").onclick=()=>{let e=document.getElementById("descriptionAttribute").value,t=document.getElementById("priorityAttribute").value;addAttributes(e,t),document.getElementById("newTodoForm").style.display="none",document.getElementById("container").style.opacity="1"},[...document.getElementsByClassName("closeButton")].forEach((function(e){e.onclick=()=>{document.getElementById("newTodoForm").style.display="none",document.getElementById("newProjectForm").style.display="none",document.getElementById("addAttributeForm").style.display="none",document.getElementById("container").style.opacity="1"}})),document.getElementById("newProject").onclick=()=>{document.getElementById("newTodoForm").style.display="none",document.getElementById("newProjectForm").style.display="flex",document.getElementById("container").style.opacity="0.4"},document.getElementById("newTodo").onclick=()=>{document.getElementById("newProjectForm").style.display="none",document.getElementById("newTodoForm").style.display="flex",document.getElementById("container").style.opacity="0.4"},t(),o(),n("Default")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBMUMsU0FBU0MsZUFBZSxjQUFjc0MsUUFBVSxLQUM1Q3ZDLFNBQVNDLGVBQWUsZUFBZVgsTUFBTUMsUUFBVSxPQUN2RFMsU0FBU0MsZUFBZSxrQkFBa0JYLE1BQU1DLFFBQVUsT0FDMURTLFNBQVNDLGVBQWUsYUFBYVgsTUFBTW9ELFFBQVUsT0FHekQxQyxTQUFTQyxlQUFlLFdBQVdzQyxRQUFVLEtBQ3pDdkMsU0FBU0MsZUFBZSxrQkFBa0JYLE1BQU1DLFFBQVUsT0FDMURTLFNBQVNDLGVBQWUsZUFBZVgsTUFBTUMsUUFBVSxPQUN2RFMsU0FBU0MsZUFBZSxhQUFhWCxNQUFNb0QsUUFBVSxPRWhCN0Q5RCxJQUNBb0MsSUFDQXRCLEVBQWMsVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgeyBUb2RvcywgUHJvamVjdHMgfSBmcm9tIFwiLi90b2Rvc1wiO1xyXG5pbXBvcnR7cHJvamVjdHNBcnJheSwgc2hvd1RvZG9zLCBjbG9zZVRvZG9zLCB0b2Rvc0NvbnRhaW5lciwgdG9kb0lEfSBmcm9tIFwiLi4vaW5kZXhcIlxyXG5cclxuXHJcbmxldCBvcGVuVG9kb3MgPSAoKSA9PntcclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgc2hvd1RvZG9zLmZvckVhY2goZnVuY3Rpb24oc2hvdyl7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gc2hvd1RvZG9zLmluZGV4T2Yoc2hvdylcclxuICAgICAgICBzaG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codG9kb3NDb250YWluZXJbaW5kZXhdKVxyXG4gICAgICAgICAgICB0b2Rvc0NvbnRhaW5lcltpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgICAgICAgY2xvc2VUb2Rvc1tpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgICAgICAgc2hvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgIH0pICAgIFxyXG4gICAgXHJcbiAgICBjbG9zZVRvZG9zLmZvckVhY2goZnVuY3Rpb24oY2xvc2Upe1xyXG4gICAgICAgIGxldCBpbmRleCA9IGNsb3NlVG9kb3MuaW5kZXhPZihjbG9zZSlcclxuICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9zQ29udGFpbmVyW2luZGV4XSlcclxuICAgICAgICAgICAgdG9kb3NDb250YWluZXJbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAgICAgc2hvd1RvZG9zW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgICAgICBjbG9zZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9KSAgICBcclxufVxyXG5cclxuXHJcbmxldCBzaG93Rm9ybXMgPSAoKSA9PntcclxuICAgIGxldCBjbG9zZUJ1dHRvbnNBcnJheSA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZUJ1dHRvbicpXVxyXG4gICAgLy9sZXQgZm9ybXNBcnJheSA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtJyldXHJcbiAgICBjbG9zZUJ1dHRvbnNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGNsb3NlKXtcclxuICAgICAgICBjbG9zZS5vbmNsaWNrID0gKCkgPT57XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUb2RvRm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RGb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJyAgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRBdHRyaWJ1dGVGb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJyAgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKS5zdHlsZS5vcGFjaXR5ID0gJzEnXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpLm9uY2xpY2sgPSAoKSA9PntcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VG9kb0Zvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RGb3JtJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKS5zdHlsZS5vcGFjaXR5ID0gJzAuNCcgICAgICAgIFxyXG4gICAgICAgIH0gICAgXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1RvZG8nKS5vbmNsaWNrID0gKCkgPT57XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RGb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUb2RvRm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJykuc3R5bGUub3BhY2l0eSA9ICcwLjQnICBcclxuICAgICAgICB9ICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi8vbGV0IGRlZmF1bHRQcm9qZWN0ID0gKCkgPT57ICAgIFxyXG4gIC8vICBjcmVhdGVQcm9qZWN0KHByb2plY3QudGl0bGUpXHJcbiAgIC8qIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcclxuICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBsZXQgdG9kb3NDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcclxuICAgIHRvZG9zQ291bnQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Byb2plY3QudGl0bGV9VG9kb3NDb3VudGApICBcclxuICAgIGxldCBzaG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBsZXQgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgc2hvdy5zcmMgPSBcImljb25zL2FuZ2xlLXNtYWxsLXJpZ2h0LnN2Z1wiXHJcbiAgICBjbG9zZS5zcmMgPSBcImljb25zL2FuZ2xlLXNtYWxsLWRvd24uc3ZnXCJcclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGVcclxuICAgIHRvZG9zQ291bnQudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRvZG9zTnVtYmVyfSBUb2RvcyBpbiB0aGlzIHByb2plY3RgXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdilcclxuICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Byb2plY3RUaXRsZS50ZXh0Q29udGVudH1gKVxyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5mbykgICAgXHJcbiAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpXHJcbiAgICBwcm9qZWN0SW5mby5hcHBlbmRDaGlsZCh0b2Rvc0NvdW50KVxyXG4gICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoc2hvdylcclxuICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKGNsb3NlKSAgICBcclxuICAgIHNob3cuY2xhc3NMaXN0LmFkZCgnc2hvdycpXHJcbiAgICBzaG93VG9kb3MucHVzaChzaG93KVxyXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKVxyXG4gICAgY2xvc2VUb2Rvcy5wdXNoKGNsb3NlKVxyXG4gICAgcHJvamVjdEluZm8uY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpdGxlRGl2JylcclxuICAgIGxldCB0b2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0b2Rvcy5jbGFzc0xpc3QuYWRkKCd0b2Rvc0NvbnRhaW5lcicpXHJcbiAgICBsZXQgaGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICBoaS50ZXh0Q29udGVudCA9ICdoaSdcclxuICAgIHRvZG9zLmFwcGVuZENoaWxkKGhpKSAgXHJcbiAgICB0b2Rvc0NvbnRhaW5lci5wdXNoKHRvZG9zKVxyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZCh0b2RvcylcclxuICAgIG9wZW5Ub2RvcygpKi9cclxuXHJcblxyXG5sZXQgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSkgPT57ICAgICAgICBcclxuICAgICAgICBpZih0aXRsZSAhPT0gJycpe1xyXG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0cyh0aXRsZSwgMClcclxuICAgICAgICAgICAgcHJvamVjdC5hZGRQcm9qZWN0KCkgXHJcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcclxuICAgICAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgICAgICBsZXQgdG9kb3NDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcclxuICAgICAgICAgICAgdG9kb3NDb3VudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7cHJvamVjdC50aXRsZX1Ub2Rvc0NvdW50YCkgIFxyXG4gICAgICAgICAgICBsZXQgc2hvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHNob3cuc3JjID0gXCJpY29ucy9hbmdsZS1zbWFsbC1yaWdodC5zdmdcIlxyXG4gICAgICAgICAgICBjbG9zZS5zcmMgPSBcImljb25zL2FuZ2xlLXNtYWxsLWRvd24uc3ZnXCJcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZVxyXG5cclxuICAgICAgICAgICAgdG9kb3NDb3VudC50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudG9kb3NOdW1iZXJ9IFRvZG9zIGluIHRoaXMgcHJvamVjdGBcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpXHJcbiAgICAgICAgICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Byb2plY3RUaXRsZS50ZXh0Q29udGVudH1gKVxyXG4gICAgICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbmZvKVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcclxuICAgICAgICAgICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQodG9kb3NDb3VudClcclxuICAgICAgICAgICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoc2hvdylcclxuICAgICAgICAgICAgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoY2xvc2UpXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2hvdy5jbGFzc0xpc3QuYWRkKCdzaG93JylcclxuICAgICAgICAgICAgc2hvd1RvZG9zLnB1c2goc2hvdylcclxuICAgICAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKVxyXG4gICAgICAgICAgICBjbG9zZVRvZG9zLnB1c2goY2xvc2UpXHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0SW5mby5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGl0bGVEaXYnKVxyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0b2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHRvZG9zLmNsYXNzTGlzdC5hZGQoJ3RvZG9zQ29udGFpbmVyJykgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHRvZG9zQ29udGFpbmVyLnB1c2godG9kb3MpXHJcbiAgICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodG9kb3MpXHJcbiAgICAgICAgICAgIG9wZW5Ub2RvcygpICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbmxldCBjcmVhdGVUb2RvID0gKHRpdGxlLCBwcm9qZWN0UGFyZW50LCB0b2RvSUQpID0+eyAgIFxyXG4gICAgICAgIGlmKCh0aXRsZSAhPSAnJykgJiYgKHByb2plY3RQYXJlbnQgIT0gJycpKXtcclxuICAgICAgICAgICAgbGV0IHRvZG8gPSBuZXcgVG9kb3ModGl0bGUsIHByb2plY3RQYXJlbnQsIHRvZG9JRClcclxuICAgICAgICAgICAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9EaXYnKVxyXG4gICAgICAgICAgICB0b2RvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0b2RvLmlkfWApXHJcbiAgICAgICAgICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICAgICAgICAgIGxldCB0aXRsZUFuZEJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHRpdGxlQW5kQnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9UaXRsZURpdicpXHJcbiAgICAgICAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGVcclxuXHJcbiAgICAgICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodGl0bGVBbmRCdXR0b25EaXYpXHJcbiAgICAgICAgICAgIHRpdGxlQW5kQnV0dG9uRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZSlcclxuXHJcbiAgICAgICAgICAgIHRvZG8uYWRkVG9kbygpXHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0c0FycmF5LmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCl7XHJcbiAgICAgICAgICAgICAgICBpZihwcm9qZWN0UGFyZW50ID09PSBwcm9qZWN0LnRpdGxlKXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0Q2hpbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwcm9qZWN0LnRpdGxlfWApLmxhc3RDaGlsZDtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0Q2hpbGQuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50b2Rvc051bWJlciArPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50b2RvQ291bnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZCcpXHJcbiAgICAgICAgICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnXHJcbiAgICAgICAgICAgIHRpdGxlQW5kQnV0dG9uRGl2LmFwcGVuZENoaWxkKGFkZEJ1dHRvbilcclxuICAgICAgICAgICAgLy9hZGRBdHRyaWJ1dGVzQXJyYXkucHVzaChhZGQpXHJcbiAgICAgICAgICAgIHRvZG8uYWRkID0gYWRkQnV0dG9uXHJcbiAgICAgICAgICAgIHRvZG8uYWRkQXR0cmlidXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH07ICAgICAgICBcclxuICAgIH07XHJcblxyXG5sZXQgb3BlbkF0dHJpYnV0ZUZvcm0gPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkQXR0cmlidXRlRm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxufVxyXG5cclxubGV0IGFkZEF0dHJpYnV0ZXMgPSAoZGVzY3JpcHRpb24sIHByaW9yaXR5KSA9PntcclxuICAgIGlmKChkZXNjcmlwdGlvbiAhPSAnJykgJiYgKHByaW9yaXR5ICE9ICcnKSl7XHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydHtvcGVuVG9kb3MsIHNob3dGb3JtcywgY3JlYXRlUHJvamVjdCwgY3JlYXRlVG9kbywgb3BlbkF0dHJpYnV0ZUZvcm19IiwiaW1wb3J0e3Byb2plY3RzQXJyYXksIHRvZG9zQXJyYXksIHNob3dUb2RvcywgY2xvc2VUb2RvcywgdG9kb3NDb250YWluZXJ9IGZyb20gXCIuLi9pbmRleFwiXHJcbmltcG9ydHtvcGVuQXR0cmlidXRlRm9ybX0gZnJvbSBcIi4vRE9NXCJcclxuXHJcbmNsYXNzIFRvZG9zIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJvamVjdFBhcmVudCwgaWQsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNoZWNrbGlzdCwgYWRkKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnByb2plY3RQYXJlbnQgPSBwcm9qZWN0UGFyZW50XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xyXG4gICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3Q7XHJcbiAgICB0aGlzLmFkZCA9IGFkZDtcclxuICB9XHJcblxyXG4gIGFkZFRvZG8oKXtcclxuICAgIHRvZG9zQXJyYXkucHVzaCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgYWRkQXR0cmlidXRlKCl7XHJcbiAgICB0aGlzLmFkZC5vbmNsaWNrID0gKCkgPT57XHJcbiAgICAgIG9wZW5BdHRyaWJ1dGVGb3JtKClcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmNsYXNzIFByb2plY3RzIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgdG9kb3NOdW1iZXIpe1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy50b2Rvc051bWJlciA9IHRvZG9zTnVtYmVyXHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0KCl7XHJcbiAgICBwcm9qZWN0c0FycmF5LnB1c2godGhpcykgICBcclxuICB9XHJcblxyXG4gIHRvZG9Db3VudCgpe1xyXG4gICAgY29uc29sZS5sb2codGhpcylcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMudGl0bGV9VG9kb3NDb3VudGApLnRleHRDb250ZW50ID0gYCR7dGhpcy50b2Rvc051bWJlcn0gVG9kb3MgaW4gdGhpcyBwcm9qZWN0YCAgICBcclxuICB9XHJcbiAgXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBUb2RvcywgUHJvamVjdHMgfTtcclxuIiwiaW1wb3J0IHtUb2RvcywgUHJvamVjdHN9IGZyb20gXCIuL21vZHVsZXMvdG9kb3NcIjtcclxuaW1wb3J0IHtvcGVuVG9kb3MsIHNob3dGb3JtcywgY3JlYXRlUHJvamVjdCwgY3JlYXRlVG9kbywgZGVmYXVsdFByb2plY3R9IGZyb20gXCIuL21vZHVsZXMvRE9NXCI7XHJcblxyXG5sZXQgdG9kb0lEID0gMFxyXG5sZXQgcHJvamVjdHNBcnJheSA9IFtdXHJcbmxldCB0b2Rvc0FycmF5ID0gW11cclxubGV0IHNob3dUb2RvcyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaG93JyldO1xyXG5sZXQgY2xvc2VUb2RvcyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZScpXVxyXG5sZXQgdG9kb3NDb250YWluZXIgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9kb3NDb250YWluZXInKV07XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlUHJvamVjdCcpLm9uY2xpY2sgPSAoKSA9PntcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKS52YWx1ZVxyXG4gICAgY3JlYXRlUHJvamVjdCh0aXRsZSlcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Rm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJykuc3R5bGUub3BhY2l0eSA9ICcxJ1xyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlVG9kbycpLm9uY2xpY2sgPSAoKSA9PntcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvVGl0bGUnKS52YWx1ZVxyXG4gICAgbGV0IHByb2plY3RQYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFBhcmVudCcpLnZhbHVlXHJcbiAgICBjcmVhdGVUb2RvKHRpdGxlLCBwcm9qZWN0UGFyZW50LCB0b2RvSUQpXHJcbiAgICArK3RvZG9JRCBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUb2RvRm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKS5zdHlsZS5vcGFjaXR5ID0gJzEnXHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRBdHRyaWJ1dGUnKS5vbmNsaWNrID0gKCkgPT57XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25BdHRyaWJ1dGUnKS52YWx1ZVxyXG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5QXR0cmlidXRlJykudmFsdWVcclxuICAgIGFkZEF0dHJpYnV0ZXMoZGVzY3JpcHRpb24sIHByaW9yaXR5KVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1RvZG9Gb3JtJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpLnN0eWxlLm9wYWNpdHkgPSAnMSdcclxufVxyXG4gICAgXHJcblxyXG5zaG93Rm9ybXMoKVxyXG5vcGVuVG9kb3MoKTtcclxuY3JlYXRlVG9kbygpXHJcbmNyZWF0ZVByb2plY3QoJ0RlZmF1bHQnKVxyXG5cclxuXHJcbmV4cG9ydCB7cHJvamVjdHNBcnJheSwgdG9kb3NBcnJheSwgc2hvd1RvZG9zLCBjbG9zZVRvZG9zLCB0b2Rvc0NvbnRhaW5lciwgdG9kb0lEfVxyXG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImV4cG9ydHMiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJvcGVuVG9kb3MiLCJzaG93VG9kb3MiLCJmb3JFYWNoIiwic2hvdyIsImluZGV4IiwiaW5kZXhPZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwidG9kb3NDb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJjbG9zZVRvZG9zIiwiY2xvc2UiLCJjcmVhdGVQcm9qZWN0IiwidGl0bGUiLCJwcm9qZWN0IiwiUHJvamVjdHMiLCJhZGRQcm9qZWN0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByb2plY3REaXYiLCJjcmVhdGVFbGVtZW50IiwicHJvamVjdFRpdGxlIiwidG9kb3NDb3VudCIsInNldEF0dHJpYnV0ZSIsInByb2plY3RJbmZvIiwic3JjIiwidGV4dENvbnRlbnQiLCJ0b2Rvc051bWJlciIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwicHVzaCIsInRvZG9zIiwiY3JlYXRlVG9kbyIsInByb2plY3RQYXJlbnQiLCJ0b2RvSUQiLCJ0b2RvIiwiVG9kb3MiLCJ0b2RvRGl2IiwiaWQiLCJ0b2RvVGl0bGUiLCJ0aXRsZUFuZEJ1dHRvbkRpdiIsImFkZFRvZG8iLCJwcm9qZWN0c0FycmF5IiwibGFzdENoaWxkIiwidG9kb0NvdW50IiwiYWRkQnV0dG9uIiwiYWRkQXR0cmlidXRlIiwiY29uc3RydWN0b3IiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsIm5vdGVzIiwiY2hlY2tsaXN0IiwidGhpcyIsInRvZG9zQXJyYXkiLCJvbmNsaWNrIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInZhbHVlIiwib3BhY2l0eSIsImFkZEF0dHJpYnV0ZXMiXSwic291cmNlUm9vdCI6IiJ9
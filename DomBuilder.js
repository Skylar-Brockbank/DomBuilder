export default class DomBuilder{
  buildElement(obj){
    const temp = document.createElement(obj.element);
    temp.id=obj.id;
    for(let i in obj.properties){
      temp[obj.properties[i].key]=obj.properties[i].value;
    }
    for(let j in obj.children){
      temp.appendChild(this.buildElement(obj.children[j]));
    }
    return temp;
  }
}
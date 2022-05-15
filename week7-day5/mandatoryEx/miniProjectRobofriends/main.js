const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];


let mainDiv = document.getElementById('mainDiv');
let search = document.getElementById('search');

class Robots{
  constructor({id,name,username,email,image}){
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.image = image;
  }
 
  showOnDom(){
    this.toShow = document.createElement('div');
    this.toShow.className = "card-img-top card card-deck";
    let p = document.createElement("p");
    p.className = "paragraph"
    let image = document.createElement('img');
    image.className = "images" 
    image.src = this.image;
    p.textContent = `${this.name}\n Username: ${this.username }\n ${this.email}`
    this.toShow.append(image);
    this.toShow.append(p);
    mainDiv.append(this.toShow) 
  }

  show(){
    this.toShow.classList.remove("d-none");
  }

  hide(){
    this.toShow.classList.add("d-none");
  }

}

let robotInstances = robots.map(element => {
  let currentRobotObj = new Robots(element);
  currentRobotObj.showOnDom();
  return currentRobotObj;
})



let resultFilter = ''
search.addEventListener('keyup', (e)=>{
  // e.preventDefault()

  resultFilter = search.value.toUpperCase()
  console.log(resultFilter)

// let a = robots.map(element => {
//   let currentRobotObj = new Robots(element);
//   currentRobotObj.showOnDom();
//   return currentRobotObj;
// })

  robotInstances.forEach((element,index) => {
      let currentRobotObj = element;
      if(currentRobotObj.name.toUpperCase().includes(resultFilter)){
        currentRobotObj.show();
      }else{
        currentRobotObj.hide();
      }
    })

 })
    


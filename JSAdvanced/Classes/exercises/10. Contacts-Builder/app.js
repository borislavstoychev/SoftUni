function contactBuilder() {
    const infoArea = document.getElementsByClassName('info')[0];
    infoArea.style.display = 'none';
  
    document.querySelector('button').addEventListener('click', () => {
      infoArea.style.display =
        infoArea.style.display == 'none' ? 'block' : 'none';
    });
  }
  
class Contact{
    constructor (firstName, lastName, phone, email){
        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
        this.email = email
        this.online = false
    }
    set online(value){
        this._online = value 
        if(this.divTitle) {
            this.divTitle.className = this._online == true ? 'title online' : 'title';
            }
    }
    get online (){
        return this._online
    }

    render(id){
        //create article tag
        this.article = document.createElement('article');
        this.infoButton = document.createElement('button');
        //crate info button
        this.infoButton.innerHTML = '&#8505;';
        //create info div tag
        this.info = document.createElement('div');
        this.info.classList.add('info');
        //create email info span tag
        this.emailInfo = document.createElement('span');
        this.emailInfo.innerHTML = `&#9993; ${this.email}`;
        //create phone number span tag
        this.phoneInfo = document.createElement('span');
        this.phoneInfo.innerHTML = `&phone; ${this.phone}`;
        //create div tag title
        this.divTitle = document.createElement('div');
        this.divTitle.textContent = `${this.firstName} ${this.lastName}`;
        this.divTitle.classList.add('title');
        // check for online bool
        this.divTitle.className = this.online == true ? 'title online' : 'title';
   
        this.info.style.display = 'none';
        
        this.divTitle.appendChild(this.infoButton);
        this.info.appendChild(this.phoneInfo);
        this.info.appendChild(this.emailInfo);
        this.article.appendChild(this.divTitle);
        this.article.appendChild(this.info);

        this.infoButton.addEventListener('click', () => {
            this.info.style.display = this.info.style.display == 'none' ? 'block' : 'none';
    });
    //append all tags to main div
    document.getElementById(id).appendChild(this.article);
  }
    
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];

contacts.forEach((c) => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => (contacts[1].online = true), 2000);


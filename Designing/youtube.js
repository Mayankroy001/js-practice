class youtubechannel{

    constructor(){
 this.subscribers =  [];
    }

    subscribe(user){
    this.subscribers.push(user);
    user.update(`${user.name} has subscribed to the channel`);
    }

     unsubscribe(user){
   this.subscribers = this.subscribers.filter((subscriber) => subscriber !== user);
    user.update(`${user.name} has unsubscribed from the channel`);
    }

     notify(message){
    this.subscribers.forEach((subscriber) => subscriber.update(message));

    }


}

class User{
    constructor(name){
        this.name = name;
    }


    update(data){
   console.log(`${this.name}: ${data}`);
    }
}
let devtoolya = new youtubechannel();
let user = new User('Mayank');
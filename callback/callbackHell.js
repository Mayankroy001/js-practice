function profileLekarAao(username, cb) {
    console.log("Fetching profile data.........");

    setTimeout(() => {
        cb({ _id: 1212, username, Age: 21, email: "huihiui@gmail.com" });
    }, 2000);

}

function postsLekarAao(id, cb) {
    console.log("Retrieving posts.....");

    setTimeout(() => {

        cb({ _id: id, posts: ["photos", "hi", "K haalcahl"] });
    }, 3000);

}

function savedPostNikalo(id, cb) {
    console.log("Sharing posts........");


    setTimeout(() => {
        cb({ _id: id, saved: [1, 2, 3, "photos"] });
    }, 4000)

}

profileLekarAao("Mayank", function (data) {
    console.log(data);


    postsLekarAao(data._id, function (posts) {

        console.log(posts);

    });
    savedPostNikalo(data._id, function (saved) {

        console.log(saved);

    });


});
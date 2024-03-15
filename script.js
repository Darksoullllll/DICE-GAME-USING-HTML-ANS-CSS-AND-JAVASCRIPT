var cnt = 6;
var player_onesum = 0;
var player_twosum = 0;
var buttonClicked = false;
function decrease_chances(rem_chances,cnt){
    cnt--;
    rem_chances[0].innerHTML = "Remaining Chances: "+cnt;
    return cnt;
}
function score(random_image_one,random_image_two,player_onesum,player_twosum){
    var myMap = new Map();
    myMap.set("dice1.png",1);
    myMap.set("dice2.png",2);
    myMap.set("dice3.png",3);
    myMap.set("dice4.png",4);
    myMap.set("dice5.png",5);
    myMap.set("dice6.png",6);
    
    player_onesum += myMap.get(random_image_one);
    player_twosum += myMap.get(random_image_two);

    return [player_onesum,player_twosum];
}
function generate_random_images(){


    var img_one = document.getElementsByClassName("img1");
    var img_two = document.getElementsByClassName("img2");
    var rem_chances = document.getElementsByClassName("chances");
    
    if(cnt >=0 && !buttonClicked){
        cnt = decrease_chances(rem_chances,cnt);
    }
    var images_arr = ["dice1.png", 
                      "dice2.png",
                      "dice3.png",
                      "dice4.png",
                      "dice5.png",
                      "dice6.png"];   
    
    var random_image_one_index = Math.floor(Math.random() * images_arr.length);
    var random_image_one = images_arr[random_image_one_index];

    var random_image_two_index = Math.floor(Math.random() * images_arr.length);
    var random_image_two = images_arr[random_image_two_index];


    var res;
    if(cnt >=0 && !buttonClicked){
        res = score(random_image_one,random_image_two,player_onesum,player_twosum);
        player_onesum = res[0];
        player_twosum = res[1];
    }

    if(cnt ==0  && !buttonClicked){
        console.log("First score: "+res[0]);
        console.log("Second score: "+res[1]);
        if(res[0] > res[1]){
            console.log("1st winner");
            var win_one = document.getElementById("one");
            win_one.innerHTML ="Player 1 win SCORE : "+res[0];
        }
        else{
            console.log(res[1]);
            console.log("2nd winner");
            var win_two = document.getElementById("two");
            win_two.innerHTML ="Player 2 win SCORE : "+res[1];
        }
    }
    if(cnt>0){
        img_one[0].src = "images/"+random_image_one;
        img_two[0].src = "images/"+random_image_two;
    }
}
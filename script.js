// Text Adventure Game
const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry GAME OVER!";

const start = `Welcome to Nosferatu: A Symphony of Horror Text Adventure Game. Click 'OK' to start the game.`;

const q1 = `You are an Estate Agent in 1838 , sent to visit your new client in Transilvania named Count Orlok. At Dinner you cut your hand in front of the Count.
1. You go to your room and take care of the cut yourself, retiring for the evening. 
OR
2. You let the Count take care of the wound for you, letting him doctor it himself. 
${enter}`;

const gameOver1 = `The Count takes your hand, and instead of medical attention, he begins to lick the blood from your palm. Appalled, you try to pull away, but his grip is too much. He continues to drain you of your blood, and before long you faint and die. ${gameOver}`;

const q2 = `You tend to your wound and go to sleep. When you wake up, you have a headache and notice two puncture wounds on your neck. You consider they may be mosquito bite, but have your doubts. Should you...
1. Read the crptic book titled Der Vampyr you stole from the small Inn you stayed at on your way to Count Orloks castle
OR
2. Ignore your suspisions and continue downstairs to have Count Orlok sign the real estate paperwork. 
${enter}`;

const gameOver2 = `After the Count signed the appropriate paper work, he suggests a drink. Before you can do anything, he attacks, piercing your neck with his teeth and draining you of your blood. ${gameOver}`;

const q3 = `Reading the book, everything it says confirms your suspistion. Count Orlok IS a Vampire! Should you...
1.  Chalk it all up to nerves and fairtales, not believing a book on some folklore.
OR
2. Stay awake all evening, barring the door so the Count cannot enter and drain your life force



${enter}`;

const gameOver3 = `Count Orlok knocks on your door and asks to have tea with you in your room that evening. You oblige, apprehensively. As you stoop to pour two cups of tea, The Count attacks, gouging his teeth into your neck and lets the blood flow from your body.${gameOver}`;

const q4 = `You survive the night, taking on a wary exploration of the castle grounds in the morning. To your horror down in the basement, you find a crypt full of coffins and in the center, an ornate coffin where Count Orlok sumbers in. Terrified, should you...
1. Run back up the stairs and begin packing your things, realizing it is time to leave immediately. 
OR
2. Scream and tip his coffin, attacking him in his sleep
${enter}`;

const gameOver4 = `Count Orlok awakes violently. He towers over you, eyes bloodshot. He uses his long spindly fingers to lift you off the ground and sinks his teeth into your flesh, causing you to drowned in your own blood.  ${gameOver}`;

const q5 = `As you pack your things, The Count slips from the Castle, unnoticed by you. He boards a ship filled with his collection of coffins to his new home in Wisborg, Germany that he had just signed for.You noticed there is a bright light coming from the trap and are tempted to look at it. Should you...
1. Not say anything, gather your paperwork, and report back to your boss as a job completed.
OR
2. Attempt to rush ahead of the ship to the town and warn them of the entity about to befall them, hoping you can make a difference
${enter}`;

const gameOver5 = `You make it back to your bosses office, where he congradulates you on another closed sale. The deep settling of dread within you doesnt dissipate after leaving the castle. The longer time goes on, the more gloom you feel, umtil one day you snap and run into the woods to live among the wolves and beasts, raving mad and never to be seen again. ${gameOver}`;

const q6= `The town is terror stricken to hear of the oncoming evil. Some denounce the claim, others begin hanging garlic wreaths and sharpening wooden stakes. The only true cure is to distract the Vampire with a pure hearted womans beauty. The only problem, is the most beautiful woman in the town is your fiance. Should you...
1. Use your Beloved as bait, hoping that you are quick enough to slay the distracted monster
OR
2. Hide your Beauty away, calling upon another fair maiden to hopefully distract the beast, even if she is not the most beautimous. ${enter}`;

const gameOver6 = `The Count arrives, leaving a ship of dead bodies behind him. The young lady is presented, but as her beauty is not adequte, the plan fails, sending the Count into a ravenous rampage through the town, killing as many as he could catch, sending others fleeing into the countryside`

const win= ` Your young love agrees to the plan, and waits in her room with her window open, attempting to lure the Count through her window. Later into the night, he slips in, upon the young woman immideltny, entranced with her beauty. You attack, but are not strong enough. Right when it looks like all hope is lost, the sun begins to rise and lay its sunrays upon the Counts pale flesh. He screams in agony, catching on fire and dissentigrating into a plume of black thick smoke. Your fiance distracted him into proper self destruction, but not without a price. She lays lifeless on the floor. You may have won, but at what price?`






// Alerts the user to start the game
alert(start);

// Sets the value of userInput to the user's entry
let userInput = prompt(q1);

// 1st Conditional Statement
// NOTE: Prompt returns the value entered as a string. That is why double equals == is used instead of triple equals === here.
if (userInput == 1) {
  userInput = prompt(q2);

  // 2nd Conditional Statement
  if (userInput == 1){
    userInput = prompt(q3);

    // 3rd Conditional Statement
    if (userInput == 2) {
      userInput = prompt(q4);

      // 4th Conditional Statement
      if (userInput == 1){
        userInput = prompt(q5);

        // 5th Conditional Statement
        if (userInput == 2) {
          userInput = prompt(q6);


          if (userInput == 1) {
            alert(win);

        } else {
            alert(gameOver6);
          }
         


        } else {
          alert(gameOver5);
        }

      } else {
        alert(gameOver4);
      }

    } else {
      alert(gameOver3);
    }

  } else {
    alert(gameOver2);
  }

} else {
  alert(gameOver1);
}
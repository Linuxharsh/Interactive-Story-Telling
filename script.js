const storyText = document.getElementById('story');
const choiceDiv = document.getElementById('choices');
const resetbtn = document.getElementById('resetbtn');

function startStory ()  {
  resetbtn.classList.add('hidden');
  showStory(
    "You wake up in a dark forest with no memory of how you got there. As you look around, you see two paths: one leading deeper into the forest and another leading towards a faint light in the distance. Which path do you choose?",
    [
      { text: "Take the left path", next: deepForest},
      { text: "Take the right path", next: rightPath},

    ]
  )

}

function rightPath() {
  showStory(
    "The right path leads to a shiny river glowing under the moonlight. You hear a splash. Something is moving in the water.",
    [
      { text: "Investigate the water", next: riverInvestigate },
      { text: "Stay away and walk along the river", next: riverWalk }
    ]
  );
}

function cabinInside() {
  showStory(
    "Inside the cabin, you find a glowing key floating in the air. Suddenly, the door shuts behind you!",
    [
      { text: "Take the key", next: takeKey },
      { text: "Try to break the door", next: breakDoor }
    ]
  );
}

function deepForest() {
  showStory(
    "You walk deeper into the forest and get trapped in a circle of talking trees. They seem angry.",
    [],
    "ENDING: The Forest Judges You"
  );
}

function riverInvestigate() {
  showStory(
    "A magical creature appears — a water spirit! It grants you one wish before disappearing.",
    [],
    "ENDING: Blessing of the River Spirit"
  );
}

function riverWalk() {
  showStory(
    "You follow the river and discover a hidden village of forest guardians. They welcome you as a guest.",
    [],
    "ENDING: The Guardian's Friend"
  );
}

function takeKey() {
  showStory(
    "The key glows brighter. A hidden portal opens, transporting you to a peaceful meadow.",
    [],
    "ENDING: Portal of Peace"
  );
}

function breakDoor() {
  showStory(
    "You break the door and escape, but the forest becomes angry and swallows the cabin.",
    [],
    "ENDING: Escape… But At What Cost?"
  );
}
function showStory(text, choices = [], ending = null) {
  storyText.textContent = text;
  choiceDiv.innerHTML = '';

  if(ending){
    storyText.innerHTML += `<br><br><strong>${ending}</strong>`;
    resetbtn.classList.remove('hidden');
    return;
  }

  choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice.text;
    button.className = 'choice-btn';
    button.onclick = () => choice.next();
    choiceDiv.appendChild(button);
  })
}

resetbtn.onclick = startStory;

startStory();
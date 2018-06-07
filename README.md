# the-dom-challenge
To begin comment out the script tag linking to `index.min.js` in the html file.
Write your code in `challenge.js`

## Deliverables

1. As a user, i should see the timer increment every second once the page has loaded
2. As a user, i can manually increment and decrement the counter as i like
3. As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
4. As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
5. As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"


What do you guys want to start with?

1:
  select counter element
  add eventListener to document .. DOMContentLoaded, start
  start eventHandler callback function should be:
      startTime = () => setInterval(callback, 1000)
          setInterval -> I want to do something (callback) every 1 second
          callback -> some function that += innerHTML by 1

2:
  selecting the plus and minus buttons
  add event listeners to both of those buttons on 'click'
  callbacks should be something that makes sense
    addTime
    subtractTime
    change the innerHTML of the counter element + or - 1

3:
  How to keep track of how many times one number has been pressed? I like to use an object with key value pairs, keys are number and values are #of times clicked (I know this from doing a lot of codewars)

  start with an empty object.
  number = counter.innerText
  if the number exists in the object( object[number] evaluates to true)
      object[number] += 1
      grab li (by id?)
      set innerHTML = 'number has been clicked object[number] times'
  else
      object[key] = 1
      create an LI (give it an id so we can find it later if necessary)
      set innerHTML to 'number has been clicked 1 time'
      append to child

4:  
    I had no idea how to do this.. read some stack overflow articles and saw that instead of stopping the interval, just stop manipulating the DOM (happening in the callback)
      now we don't want our timer callback to happen every second
      restructure the callback:
          IF the timer is not paused, add 1 to the counter
          ELSE do not add 1 to the counter, disable all buttons
      lets set a variable that can keep track of the truthiness of the pause

        start it off let paused = false (because when we begin, the game is not paused) (also, let paused; works because paused is undefined which evaluates to false)

      if we click pause button(when isPaused == false), pause the game :
        -- change isPaused -> true
        -- change button to 'resume'
        -- disable all all buttons
        -- stop the timer from changing (stop the callback of setInterval)
      if we click pause button(when isPaused == true), resume the game :
        -- change isPauaed -> false
        -- change button to 'pause'
        -- enable all all buttons
        -- increment the timer again (make the callback happen again)

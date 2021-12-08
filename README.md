# Maxwell Mysteries Demo
This is a demo for the Maxwell Mysteries *play-at-home* puzzle game series. You can play it online at [mysteries-demo.co.uk](https://mysteries-demo.co.uk/).

## About Maxwell Mysteries
During the lockdowns of 2020 and 2021, after being placed on furlough, I needed a project. Having worked solidly in the escape game puzzle world for the last 3 years, me and my partner set to work creating a puzzle game which could be played at home. We created the puzzles together, she saw to the artwork and I focussed on the web development. At the time my frontend skills were relatively fresh, especially my work with React, but it was an excellent challenge to keep us busy and I learnt a lot creating that first game.

Our first in the Maxwell Mysteries series was released in early November 2020 and it's follow up The Kidnapped Professor was released early December 2021. Both games are a combination of printed and digital puzzles that require all the skills of a real life escape room to complete. You can read a review of the first game [here](https://www.reviewtheroom.co.uk/paradox-parlours-maxwell-mysteries-the-disappearing-diamond-play-at-home/)

Both games consist of 2+ hours of puzzling content over 5 levels. Player progress is saved to the database at the end of each level.

## About The Demo
This demo uses the U.I. structure of our second game *The Kidnapped Professor*. Unlike the full games there are no printed materials required. Progress is also not saved to the database as it is consists of one short level, though your success and music preference will be saved to local storage.

### Technologies
Just like the full games, this demo was bootstrapped using [Create React App](https://github.com/facebook/create-react-app) with custom CSS. It also uses React specific packages such as [React Router](https://reactrouter.com/) and [react-use-audio-player](https://www.npmjs.com/package/react-use-audio-player), which I chose for my previous experience with *howler.js*

You can run this demo locally with `yarn start`

## Lessons and Improvements
This code is a huge improvement on the first Maxwell Mysteries, not least because of the implementation of proper page routing rather than the custom built system I pulled together for the first game. It also has a fresher U.I. with more interactive content and a more versatile clue system, offering both image and text based hints. The non-linear play style with the player having a choice of which order to complete levels 2 - 4 is also a more interesting user experience.

The other big improvement is the resuasibility and flexibility of components. It was incredibly easy to use the code base of *The Kidnapped Professor* to create this demo, which uses different puzzles and a change in game structure, but also the components created here are flexible enough to be reused and adapted for future games. 

There are of course always improvements to be made. At present there is no unit testing incorporated into the code. This is a big bug bear of mine and something I would like to introduce as the next big priority. There is also much refactoring which could be done to further increase the reusability of components and seperate out the logic from the component JSX. 

In terms of file structure the CSS became a pain to navigate very quickly and I have been experimenting with different file organisation in my other projects to find a system which really works for me. One possibility would be to overhaul this code base into a React app which uses *Styled Components*.

## Future Of Maxwell Mysteries
I elluded to future games earlier and that is because we now have a structure and template for the series allowing us to create further games with relative ease. We have plans to return to the 1930s Private Investigator but also to try something a bit different by following some missions of secret agent Maxwell. Early tinkering with design elements suggest that the code base is easily rewrapped to support different themes in this way. 

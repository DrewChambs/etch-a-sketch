# Etch-a-sketch Application - The Odin Project Application

Part of a series of applications, and various web projects, from The Odin Project.

# Table of contents

• Overview
• The challenge
• Screenshot
• Links
• My process
• Built with
• What I learned
• Continued development
• Author - Andrew Chambers
• Website - andrewchambersweb.com

# Overview

# The challenge

This is the etch-a-sketch drawing game. The user should be able to choose a number for the amount of squares desired in a grid. The default grid is made up of 16 x 16 squares, but it then can be changed to the user's selection.
Once the squares are drawn the mouse becomes a drawing tool and the user can then design a pattern on the canvas.
There should be a stop-measure within the application that only allows a value between 1 and 100.

# Screenshot

# Link

https://drewchambs.github.io/etch-a-sketch/

# My process

My initial challenge focused on creating the starting grid of 16 x 16 squares. Once a the multiplication of the two numbers produced 256, the next step was to create the initial grid with the use of a "for loop" based on the total number of 256 squares.
The next step was to set mouse events to recognize movement within the selected area. Then as the mouse moves over a square I used "style.backgroundColor" to change each hovered square.
After the initial set-up, the process moved to using a user-selection to apply a changed set of squares to the grid.
The user is asked, through a prompt, to select their desired amount of squares for the grid. That number is then applied to the "for loop" as a replacement for the starting grid number.
A reset button was also created to allow the user to set the grid back to it's default.

# Built with

VS Code using HTML, CSS, and JavaScript.

• HTML5
• CSS Grid
• Flexbox
• JavaScript
• ES6

# What I learned

I learned quite a bit about events that set the triggers to be able to build a grid. The use of a "for loop" to aide the process of building the grid was an exhaustive process. Math computations came to the fore in designing the grid. After exploring events, it emerged that "mouseleave" would serve the project adequately.

# Continued development

Continued exploration of event handling.

# Author

Andrew Chambers

# Website

andrewchambersweb.com

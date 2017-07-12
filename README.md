# Game of Life - Coding Interview

## Introduction

> The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, or "populated" or "unpopulated". Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
> 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
> 1. Any live cell with two or three live neighbours lives on to the next generation.
> 1. Any live cell with more than three live neighbours dies, as if by overpopulation.
> 1. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
> The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.
https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

![Gospers Glider Gun](https://raw.githubusercontent.com/tomdottom/zipcode-coding-interview/master/Gospers_glider_gun.gif)

## Install dependencies

```
npm install
```

## Run tests

```
npm run tests
```

or run tests on any file change


```
npm run watch-tests
```

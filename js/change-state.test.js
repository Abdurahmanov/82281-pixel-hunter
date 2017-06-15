import assert from 'assert';
import {changeLives, receiveAnswerType, checkAnswer, changeCurrentQuestion, countScore} from './change-state';

describe(`changeLives`, () => {
  const state = {lives: 3};
  it(`shouldn't decrease lives if answer is correct`, () => {
    assert.equal(changeLives(state.lives, true), 3);
  });

  it(`should decrease lives if answer is incorrect`, () => {
    assert.equal(changeLives(state.lives, false), 2);
  });

  it(`shouldn't decrease lives if answer isn't received`, () => {
    assert.equal(changeLives(state.lives), 3);
  });

  it(`lives shouldn't be less 0`, () => {
    assert.equal(changeLives(0, true), 0);
  });
});

describe(`ReceiveAnswerType`, () => {
  it(`should return "fast" type if answer is correct and time <= 10sec`, () => {
    assert.equal(receiveAnswerType(true, 0), `fast`);
    assert.equal(receiveAnswerType(true, 9), `fast`);
    assert.equal(receiveAnswerType(true, 10), `fast`);
  });

  it(`should return "correct" type if answer is correct and time > 10sec and <= 20sec`, () => {
    assert.equal(receiveAnswerType(true, 11), `correct`);
    assert.equal(receiveAnswerType(true, 20), `correct`);
  });

  it(`should return "slow" type if answer is correct and time > 20sec and <= 30sec`, () => {
    assert.equal(receiveAnswerType(true, 21), `slow`);
    assert.equal(receiveAnswerType(true, 30), `slow`);
  });

  it(`should return "wrong" type if answer is incorrect regardless of time`, () => {
    assert.equal(receiveAnswerType(false, 0), `wrong`);
    assert.equal(receiveAnswerType(false, 25), `wrong`);
  });

  it(`should return "wrong" type if time isn't received regardless of answer`, () => {
    assert.equal(receiveAnswerType(false), `wrong`);
    assert.equal(receiveAnswerType(true), `wrong`);
  });

  it(`should return "wrong" type if answer is correct but time is > 30sec`, () => {
    assert.equal(receiveAnswerType(true, 31), `wrong`);
  });

  it(`should return "unknown" type if received not all params`, () => {
    assert.equal(receiveAnswerType(), `unknown`);
    assert.equal(receiveAnswerType(null, 0), `unknown`);
    assert.equal(receiveAnswerType(null, 30), `unknown`);
    assert.equal(receiveAnswerType(null, 5), `unknown`);
    assert.equal(receiveAnswerType(null, 25), `unknown`);
  });
});

describe(`checkAnswer`, () => {
  it(`should return true if received answer equal correct answer`, () => {
    assert.ok(checkAnswer(`photo`, `photo`), true);
    assert.ok(checkAnswer(`paint`, `paint`), true);
    assert.ok(checkAnswer(1, 1), true);
    assert.ok(checkAnswer(`1`, 1), true);
  });
  it(`should return false if only received answer or only correct answer`, () => {
    assert.ok(checkAnswer(null, 1), false);
    assert.ok(checkAnswer(null, `photo`), false);
    assert.ok(checkAnswer(`paint`, `photo`), false);
    assert.ok(checkAnswer(`photo`), false);
    assert.ok(checkAnswer(1), false);
  });
});

describe(`changeCurrentQuestion`, () => {
  it(`should increase currentQuestion if received number less then maximum number of questions`, () => {
    assert.equal(changeCurrentQuestion(5, 9), 6);
    assert.equal(changeCurrentQuestion(0, 9), 1);
  });

  it(`shouldn't increase currentQuestion if received number equal maximum number of questions`, () => {
    assert.equal(changeCurrentQuestion(9, 9), 9);
  });

  it(`shouldn't decrease currentQuestion if received number more then maximum number of questions`, () => {
    assert.equal(changeCurrentQuestion(15, 9), 9);
  });

  it(`shouldn't increase currentQuestion if maximum number of questions is undefined`, () => {
    assert.equal(changeCurrentQuestion(3), 3);
    assert.equal(changeCurrentQuestion(9), 9);
  });
});

describe(`countAnswerScores`, () => {
  const state = {
    answers: [`fast`, `correct`, `slow`, `wrong`],
    lives: 1
  };

  it(`every correct answer should cost 100 points`, () => {
    assert.equal(countScore(state).questionsScore, 300);
  });

  it(`every incorrect answer should cost 0 points`, () => {
    assert.equal(countScore(state).questionsScore, 0);
  });


  it(`every "fast" answer should return extra 50 points`, () => {
    assert.equal(countScore(state).fast.score, 50);
  });

  it(`every "slow" answer should return -50 points`, () => {
    assert.equal(countScore(state).slow.score, -50);
  });

  it(`every live should return 50 points`, () => {
    assert.equal(countScore(state).lives.score, 50);
  });

  it(`should summarize all results`, () => {
    assert.equal(countScore(state).totalScore, 350);
  });
});

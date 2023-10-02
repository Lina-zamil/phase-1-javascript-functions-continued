// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};

function wrapAdjective(specification = "*") {

    return function (fun1 = "special") {
        return `You are ${specification}${fun1}${specification}!`;
    };
};
const encouragingPromptFunction = wrapAdjective("!!!")
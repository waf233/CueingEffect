/**************** 
 * 线索效应-Al *
 ****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = '线索效应-AL';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'cm',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(trialRoutineBegin());
flowScheduler.add(trialRoutineEachFrame());
flowScheduler.add(trialRoutineEnd());
flowScheduler.add(指导语RoutineBegin());
flowScheduler.add(指导语RoutineEachFrame());
flowScheduler.add(指导语RoutineEnd());
flowScheduler.add(刺激范围展示30RoutineBegin());
flowScheduler.add(刺激范围展示30RoutineEachFrame());
flowScheduler.add(刺激范围展示30RoutineEnd());
const trainLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trainLoopBegin(trainLoopScheduler));
flowScheduler.add(trainLoopScheduler);
flowScheduler.add(trainLoopEnd);




flowScheduler.add(指导语2RoutineBegin());
flowScheduler.add(指导语2RoutineEachFrame());
flowScheduler.add(指导语2RoutineEnd());
const trial1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trial1LoopBegin(trial1LoopScheduler));
flowScheduler.add(trial1LoopScheduler);
flowScheduler.add(trial1LoopEnd);




flowScheduler.add(routine_1RoutineBegin());
flowScheduler.add(routine_1RoutineEachFrame());
flowScheduler.add(routine_1RoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': '训练参数文件short30.xlsx', 'path': '训练参数文件short30.xlsx'},
    {'name': '窄范围组参数文件 .xlsx', 'path': '窄范围组参数文件 .xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '按空格键开始',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  resp_start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "指导语"
  指导语Clock = new util.Clock();
  instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction',
    text: '欢迎参与实验！\n\n实验开始后屏幕中心将出现“+”注视点\n\n然后中心注视点变为“←”、“→”或“矩形”\n\n实验期间可以视线可自由移动！\n\n箭头或矩形消失一段时间后，屏幕两边呈现一个圆点\n\n箭头方向指示圆点方向，矩形不指示圆点方向\n\n你需要在圆点出现后【尽快】按下“空格”键\n\n实验设有检测试次，屏幕将不出现圆点，检测试次中【无需】按键\n\n两实验试次中间间隔1.5秒\n\n请注意：\n实验全程请使用【右手】进行按键！\n\n有任何问题请联系主试解答！\n正式实验开始前，请确保完全理解实验要求！\n\n按“空格”键，你将看到圆点可能出现的位置\n确认后按“空格”键进入练习阶段，练习结束后进入正式实验',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.4,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  continue1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "刺激范围展示30"
  刺激范围展示30Clock = new util.Clock();
  polygon_r30_2 = new visual.Polygon({
    win: psychoJS.window, name: 'polygon_r30_2', units : 'height', 
    edges: 100, size:[2, 2],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  polygon_r0_2 = new visual.Polygon({
    win: psychoJS.window, name: 'polygon_r0_2', units : 'height', 
    edges: 100, size:[2, 2],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  polygon_rm30_2 = new visual.Polygon({
    win: psychoJS.window, name: 'polygon_rm30_2', units : 'height', 
    edges: 100, size:[2, 2],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  polygon_l30_2 = new visual.Polygon({
    win: psychoJS.window, name: 'polygon_l30_2', units : 'height', 
    edges: 100, size:[2, 2],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  polygon_l0_2 = new visual.Polygon({
    win: psychoJS.window, name: 'polygon_l0_2', units : 'height', 
    edges: 100, size:[2, 2],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  polygon_lm30_2 = new visual.Polygon({
    win: psychoJS.window, name: 'polygon_lm30_2', units : 'height', 
    edges: 100, size:[2, 2],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 1.0, depth: -5, interpolate: true,
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "interval_2"
  interval_2Clock = new util.Clock();
  rest1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rest1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "pre_cue"
  pre_cueClock = new util.Clock();
  fix_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_3',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "cue"
  cueClock = new util.Clock();
  arrow = new visual.ShapeStim ({
    win: psychoJS.window, name: 'arrow', units : 'height', 
    vertices: 'arrow', size:[2, 2],
    ori: 1.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 0.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  neutral = new visual.Rect ({
    win: psychoJS.window, name: 'neutral', units : 'height', 
    width: [2, 1][0], height: [2, 1][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  SOA_interval = new visual.TextStim({
    win: psychoJS.window,
    name: 'SOA_interval',
    text: ' ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  resp_adv = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  fix_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_4',
    text: '+',
    font: 'Open Sans',
    units: 'cm', 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  polygon_2 = new visual.Polygon({
    win: psychoJS.window, name: 'polygon_2', units : 'height', 
    edges: 100, size:[2, 2],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 1.0, depth: -5, interpolate: true,
  });
  
  targetRT_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "指导语2"
  指导语2Clock = new util.Clock();
  fix_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_6',
    text: '按“空格”开始正式实验',
    font: 'Open Sans',
    units: 'cm', 
    pos: [0, 0], height: 0.4,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "routine_1"
  routine_1Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '感谢您的参与！\n按“空格“退出实验',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  resp_quit = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    resp_start.keys = undefined;
    resp_start.rt = undefined;
    _resp_start_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(text_2);
    trialComponents.push(resp_start);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *resp_start* updates
    if (t >= 0.0 && resp_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_start.tStart = t;  // (not accounting for frame time here)
      resp_start.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_start.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_start.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_start.clearEvents(); });
    }
    
    if (resp_start.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_start.getKeys({keyList: ['space'], waitRelease: false});
      _resp_start_allKeys = _resp_start_allKeys.concat(theseKeys);
      if (_resp_start_allKeys.length > 0) {
        resp_start.keys = _resp_start_allKeys[_resp_start_allKeys.length - 1].name;  // just the last key pressed
        resp_start.rt = _resp_start_allKeys[_resp_start_allKeys.length - 1].rt;
        resp_start.duration = _resp_start_allKeys[_resp_start_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp_start.corr, level);
    }
    psychoJS.experiment.addData('resp_start.keys', resp_start.keys);
    if (typeof resp_start.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_start.rt', resp_start.rt);
        psychoJS.experiment.addData('resp_start.duration', resp_start.duration);
        routineTimer.reset();
        }
    
    resp_start.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function 指导语RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine '指导语' ---
    t = 0;
    指导语Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('指导语.started', globalClock.getTime());
    continue1.keys = undefined;
    continue1.rt = undefined;
    _continue1_allKeys = [];
    // keep track of which components have finished
    指导语Components = [];
    指导语Components.push(instruction);
    指导语Components.push(continue1);
    
    for (const thisComponent of 指导语Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function 指导语RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine '指导语' ---
    // get current time
    t = 指导语Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction* updates
    if (t >= 0.0 && instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction.tStart = t;  // (not accounting for frame time here)
      instruction.frameNStart = frameN;  // exact frame index
      
      instruction.setAutoDraw(true);
    }
    
    
    // *continue1* updates
    if (t >= 0.0 && continue1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue1.tStart = t;  // (not accounting for frame time here)
      continue1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { continue1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { continue1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { continue1.clearEvents(); });
    }
    
    if (continue1.status === PsychoJS.Status.STARTED) {
      let theseKeys = continue1.getKeys({keyList: ['space'], waitRelease: false});
      _continue1_allKeys = _continue1_allKeys.concat(theseKeys);
      if (_continue1_allKeys.length > 0) {
        continue1.keys = _continue1_allKeys[_continue1_allKeys.length - 1].name;  // just the last key pressed
        continue1.rt = _continue1_allKeys[_continue1_allKeys.length - 1].rt;
        continue1.duration = _continue1_allKeys[_continue1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of 指导语Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function 指导语RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine '指导语' ---
    for (const thisComponent of 指导语Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('指导语.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(continue1.corr, level);
    }
    psychoJS.experiment.addData('continue1.keys', continue1.keys);
    if (typeof continue1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('continue1.rt', continue1.rt);
        psychoJS.experiment.addData('continue1.duration', continue1.duration);
        routineTimer.reset();
        }
    
    continue1.stop();
    // the Routine "指导语" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function 刺激范围展示30RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine '刺激范围展示30' ---
    t = 0;
    刺激范围展示30Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('刺激范围展示30.started', globalClock.getTime());
    polygon_r30_2.setOpacity(1.0);
    polygon_r30_2.setPos([(((1 - 2) * 8) * np.cos(((30 * np.pi) / 180))), (8 * np.sin(((30 * np.pi) / 180)))]);
    polygon_r0_2.setOpacity(1.0);
    polygon_r0_2.setPos([(((1 - 2) * 8) * np.cos(((0 * np.pi) / 180))), (8 * np.sin(((0 * np.pi) / 180)))]);
    polygon_rm30_2.setOpacity(1.0);
    polygon_rm30_2.setPos([(((1 - 2) * 8) * np.cos((((- 30) * np.pi) / 180))), (8 * np.sin((((- 30) * np.pi) / 180)))]);
    polygon_l30_2.setOpacity(1.0);
    polygon_l30_2.setPos([((1 * 8) * np.cos(((30 * np.pi) / 180))), (8 * np.sin(((30 * np.pi) / 180)))]);
    polygon_l0_2.setOpacity(1.0);
    polygon_l0_2.setPos([((1 * 8) * np.cos(((0 * np.pi) / 180))), (8 * np.sin(((0 * np.pi) / 180)))]);
    polygon_lm30_2.setOpacity(1.0);
    polygon_lm30_2.setPos([((1 * 8) * np.cos((((- 30) * np.pi) / 180))), (8 * np.sin((((- 30) * np.pi) / 180)))]);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    刺激范围展示30Components = [];
    刺激范围展示30Components.push(polygon_r30_2);
    刺激范围展示30Components.push(polygon_r0_2);
    刺激范围展示30Components.push(polygon_rm30_2);
    刺激范围展示30Components.push(polygon_l30_2);
    刺激范围展示30Components.push(polygon_l0_2);
    刺激范围展示30Components.push(polygon_lm30_2);
    刺激范围展示30Components.push(key_resp_2);
    
    for (const thisComponent of 刺激范围展示30Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function 刺激范围展示30RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine '刺激范围展示30' ---
    // get current time
    t = 刺激范围展示30Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_r30_2* updates
    if (t >= 0.0 && polygon_r30_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_r30_2.tStart = t;  // (not accounting for frame time here)
      polygon_r30_2.frameNStart = frameN;  // exact frame index
      
      polygon_r30_2.setAutoDraw(true);
    }
    
    
    // *polygon_r0_2* updates
    if (t >= 0.0 && polygon_r0_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_r0_2.tStart = t;  // (not accounting for frame time here)
      polygon_r0_2.frameNStart = frameN;  // exact frame index
      
      polygon_r0_2.setAutoDraw(true);
    }
    
    
    // *polygon_rm30_2* updates
    if (t >= 0.0 && polygon_rm30_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_rm30_2.tStart = t;  // (not accounting for frame time here)
      polygon_rm30_2.frameNStart = frameN;  // exact frame index
      
      polygon_rm30_2.setAutoDraw(true);
    }
    
    
    // *polygon_l30_2* updates
    if (t >= 0.0 && polygon_l30_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_l30_2.tStart = t;  // (not accounting for frame time here)
      polygon_l30_2.frameNStart = frameN;  // exact frame index
      
      polygon_l30_2.setAutoDraw(true);
    }
    
    
    // *polygon_l0_2* updates
    if (t >= 0.0 && polygon_l0_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_l0_2.tStart = t;  // (not accounting for frame time here)
      polygon_l0_2.frameNStart = frameN;  // exact frame index
      
      polygon_l0_2.setAutoDraw(true);
    }
    
    
    // *polygon_lm30_2* updates
    if (t >= 0.0 && polygon_lm30_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_lm30_2.tStart = t;  // (not accounting for frame time here)
      polygon_lm30_2.frameNStart = frameN;  // exact frame index
      
      polygon_lm30_2.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of 刺激范围展示30Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function 刺激范围展示30RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine '刺激范围展示30' ---
    for (const thisComponent of 刺激范围展示30Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('刺激范围展示30.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "刺激范围展示30" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function trainLoopBegin(trainLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    train = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: '训练参数文件short30.xlsx',
      seed: undefined, name: 'train'
    });
    psychoJS.experiment.addLoop(train); // add the loop to the experiment
    currentLoop = train;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrain of train) {
      snapshot = train.getSnapshot();
      trainLoopScheduler.add(importConditions(snapshot));
      trainLoopScheduler.add(interval_2RoutineBegin(snapshot));
      trainLoopScheduler.add(interval_2RoutineEachFrame());
      trainLoopScheduler.add(interval_2RoutineEnd(snapshot));
      trainLoopScheduler.add(pre_cueRoutineBegin(snapshot));
      trainLoopScheduler.add(pre_cueRoutineEachFrame());
      trainLoopScheduler.add(pre_cueRoutineEnd(snapshot));
      trainLoopScheduler.add(cueRoutineBegin(snapshot));
      trainLoopScheduler.add(cueRoutineEachFrame());
      trainLoopScheduler.add(cueRoutineEnd(snapshot));
      trainLoopScheduler.add(trainLoopEndIteration(trainLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trainLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(train);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trainLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trial1LoopBegin(trial1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trial1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: '窄范围组参数文件 .xlsx',
      seed: undefined, name: 'trial1'
    });
    psychoJS.experiment.addLoop(trial1); // add the loop to the experiment
    currentLoop = trial1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial1 of trial1) {
      snapshot = trial1.getSnapshot();
      trial1LoopScheduler.add(importConditions(snapshot));
      trial1LoopScheduler.add(interval_2RoutineBegin(snapshot));
      trial1LoopScheduler.add(interval_2RoutineEachFrame());
      trial1LoopScheduler.add(interval_2RoutineEnd(snapshot));
      trial1LoopScheduler.add(pre_cueRoutineBegin(snapshot));
      trial1LoopScheduler.add(pre_cueRoutineEachFrame());
      trial1LoopScheduler.add(pre_cueRoutineEnd(snapshot));
      trial1LoopScheduler.add(cueRoutineBegin(snapshot));
      trial1LoopScheduler.add(cueRoutineEachFrame());
      trial1LoopScheduler.add(cueRoutineEnd(snapshot));
      trial1LoopScheduler.add(trial1LoopEndIteration(trial1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trial1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trial1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trial1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function interval_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'interval_2' ---
    t = 0;
    interval_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('interval_2.started', globalClock.getTime());
    // keep track of which components have finished
    interval_2Components = [];
    interval_2Components.push(rest1);
    
    for (const thisComponent of interval_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function interval_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'interval_2' ---
    // get current time
    t = interval_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rest1* updates
    if (t >= 0.0 && rest1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rest1.tStart = t;  // (not accounting for frame time here)
      rest1.frameNStart = frameN;  // exact frame index
      
      rest1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rest1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rest1.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of interval_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function interval_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'interval_2' ---
    for (const thisComponent of interval_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('interval_2.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function pre_cueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pre_cue' ---
    t = 0;
    pre_cueClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('pre_cue.started', globalClock.getTime());
    // keep track of which components have finished
    pre_cueComponents = [];
    pre_cueComponents.push(fix_3);
    
    for (const thisComponent of pre_cueComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function pre_cueRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pre_cue' ---
    // get current time
    t = pre_cueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_3* updates
    if (t >= 0.0 && fix_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_3.tStart = t;  // (not accounting for frame time here)
      fix_3.frameNStart = frameN;  // exact frame index
      
      fix_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pre_cueComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function pre_cueRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pre_cue' ---
    for (const thisComponent of pre_cueComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pre_cue.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function cueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cue' ---
    t = 0;
    cueClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.900000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('cue.started', globalClock.getTime());
    arrow.setOpacity(arrow_onset);
    arrow.setPos([0, 0]);
    arrow.setOri((90+180*dir));
    neutral.setOpacity(neutral_onset);
    resp_adv.keys = undefined;
    resp_adv.rt = undefined;
    _resp_adv_allKeys = [];
    polygon_2.setOpacity((1-catch));
    polygon_2.setPos([(((1 - (2 * dir)) * 8) * np.cos(((angle * np.pi) / 180))), (8 * np.sin(((angle * np.pi) / 180)))]);
    targetRT_2.keys = undefined;
    targetRT_2.rt = undefined;
    _targetRT_2_allKeys = [];
    // keep track of which components have finished
    cueComponents = [];
    cueComponents.push(arrow);
    cueComponents.push(neutral);
    cueComponents.push(SOA_interval);
    cueComponents.push(resp_adv);
    cueComponents.push(fix_4);
    cueComponents.push(polygon_2);
    cueComponents.push(targetRT_2);
    
    for (const thisComponent of cueComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function cueRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cue' ---
    // get current time
    t = cueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *arrow* updates
    if (t >= 0.0 && arrow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow.tStart = t;  // (not accounting for frame time here)
      arrow.frameNStart = frameN;  // exact frame index
      
      arrow.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (arrow.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      arrow.setAutoDraw(false);
    }
    
    
    // *neutral* updates
    if (t >= 0.0 && neutral.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neutral.tStart = t;  // (not accounting for frame time here)
      neutral.frameNStart = frameN;  // exact frame index
      
      neutral.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (neutral.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      neutral.setAutoDraw(false);
    }
    
    
    // *SOA_interval* updates
    if (t >= 0.0 && SOA_interval.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOA_interval.tStart = t;  // (not accounting for frame time here)
      SOA_interval.frameNStart = frameN;  // exact frame index
      
      SOA_interval.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (SOA_interval.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      SOA_interval.setAutoDraw(false);
    }
    
    
    // *resp_adv* updates
    if (t >= 0.0 && resp_adv.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_adv.tStart = t;  // (not accounting for frame time here)
      resp_adv.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_adv.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_adv.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_adv.clearEvents(); });
    }
    
    frameRemains = 0.0 + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (resp_adv.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      resp_adv.status = PsychoJS.Status.FINISHED;
        }
      
    if (resp_adv.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_adv.getKeys({keyList: ['space'], waitRelease: false});
      _resp_adv_allKeys = _resp_adv_allKeys.concat(theseKeys);
      if (_resp_adv_allKeys.length > 0) {
        resp_adv.keys = _resp_adv_allKeys[_resp_adv_allKeys.length - 1].name;  // just the last key pressed
        resp_adv.rt = _resp_adv_allKeys[_resp_adv_allKeys.length - 1].rt;
        resp_adv.duration = _resp_adv_allKeys[_resp_adv_allKeys.length - 1].duration;
      }
    }
    
    
    // *fix_4* updates
    if (t >= 0.0 && fix_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_4.tStart = t;  // (not accounting for frame time here)
      fix_4.frameNStart = frameN;  // exact frame index
      
      fix_4.setAutoDraw(true);
    }
    
    frameRemains = 2.9  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fix_4.status === PsychoJS.Status.STARTED || fix_4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fix_4.setAutoDraw(false);
    }
    
    
    // *polygon_2* updates
    if (t >= 0.9 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }
    
    frameRemains = 0.9 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_2.setAutoDraw(false);
    }
    
    
    // *targetRT_2* updates
    if (t >= 0.9 && targetRT_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      targetRT_2.tStart = t;  // (not accounting for frame time here)
      targetRT_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { targetRT_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { targetRT_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { targetRT_2.clearEvents(); });
    }
    
    frameRemains = 0.9 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (targetRT_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      targetRT_2.status = PsychoJS.Status.FINISHED;
        }
      
    if (targetRT_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = targetRT_2.getKeys({keyList: ['space'], waitRelease: false});
      _targetRT_2_allKeys = _targetRT_2_allKeys.concat(theseKeys);
      if (_targetRT_2_allKeys.length > 0) {
        targetRT_2.keys = _targetRT_2_allKeys[_targetRT_2_allKeys.length - 1].name;  // just the last key pressed
        targetRT_2.rt = _targetRT_2_allKeys[_targetRT_2_allKeys.length - 1].rt;
        targetRT_2.duration = _targetRT_2_allKeys[_targetRT_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of cueComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function cueRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cue' ---
    for (const thisComponent of cueComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('cue.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp_adv.corr, level);
    }
    psychoJS.experiment.addData('resp_adv.keys', resp_adv.keys);
    if (typeof resp_adv.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_adv.rt', resp_adv.rt);
        psychoJS.experiment.addData('resp_adv.duration', resp_adv.duration);
        }
    
    resp_adv.stop();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(targetRT_2.corr, level);
    }
    psychoJS.experiment.addData('targetRT_2.keys', targetRT_2.keys);
    if (typeof targetRT_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('targetRT_2.rt', targetRT_2.rt);
        psychoJS.experiment.addData('targetRT_2.duration', targetRT_2.duration);
        routineTimer.reset();
        }
    
    targetRT_2.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function 指导语2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine '指导语2' ---
    t = 0;
    指导语2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('指导语2.started', globalClock.getTime());
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    指导语2Components = [];
    指导语2Components.push(fix_6);
    指导语2Components.push(key_resp);
    
    for (const thisComponent of 指导语2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function 指导语2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine '指导语2' ---
    // get current time
    t = 指导语2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_6* updates
    if (t >= 0.0 && fix_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_6.tStart = t;  // (not accounting for frame time here)
      fix_6.frameNStart = frameN;  // exact frame index
      
      fix_6.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of 指导语2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function 指导语2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine '指导语2' ---
    for (const thisComponent of 指导语2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('指导语2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "指导语2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function routine_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'routine_1' ---
    t = 0;
    routine_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('routine_1.started', globalClock.getTime());
    resp_quit.keys = undefined;
    resp_quit.rt = undefined;
    _resp_quit_allKeys = [];
    // keep track of which components have finished
    routine_1Components = [];
    routine_1Components.push(text);
    routine_1Components.push(resp_quit);
    
    for (const thisComponent of routine_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function routine_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'routine_1' ---
    // get current time
    t = routine_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *resp_quit* updates
    if (t >= 0.0 && resp_quit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_quit.tStart = t;  // (not accounting for frame time here)
      resp_quit.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      resp_quit.clock.reset();
      resp_quit.start();
    }
    
    if (resp_quit.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_quit.getKeys({keyList: ['space'], waitRelease: false});
      _resp_quit_allKeys = _resp_quit_allKeys.concat(theseKeys);
      if (_resp_quit_allKeys.length > 0) {
        resp_quit.keys = _resp_quit_allKeys[_resp_quit_allKeys.length - 1].name;  // just the last key pressed
        resp_quit.rt = _resp_quit_allKeys[_resp_quit_allKeys.length - 1].rt;
        resp_quit.duration = _resp_quit_allKeys[_resp_quit_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of routine_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function routine_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'routine_1' ---
    for (const thisComponent of routine_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('routine_1.stopped', globalClock.getTime());
    resp_quit.stop();
    // the Routine "routine_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

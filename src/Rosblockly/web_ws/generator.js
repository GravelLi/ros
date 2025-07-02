Blockly.Python['move_forward'] = function(block) {
  var speed = block.getFieldValue('SPEED');
  var duration = block.getFieldValue('DURATION');
  var code = `robot.move_forward(${speed}, ${duration})\n`;
  return code;
};

Blockly.Python['move_backward'] = function(block) {
  var speed = block.getFieldValue('SPEED');
  var duration = block.getFieldValue('DURATION');
  var code = `robot.move_backward(${speed}, ${duration})\n`;
  return code;
};


Blockly.Python['turn_left'] = function(block) {
  var degrees = block.getFieldValue('DEGREES');
  var speed = block.getFieldValue('SPEED');
  var code = `robot.turn_left(${degrees}, ${speed})\n`;
  return code;
};

Blockly.Python['turn_right'] = function(block) {
  var degrees = block.getFieldValue('DEGREES');
  var speed = block.getFieldValue('SPEED');
  var code = `robot.turn_right(${degrees}, ${speed})\n`;
  return code;
};

Blockly.Python['stop_robot'] = function(block) {
  var code = 'robot.stop()\n';
  return code;
};
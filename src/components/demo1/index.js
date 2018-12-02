/**
 * Created with wangyonghua.
 * Date: 2018-11-24
 * Time: 22:40
 * Desc: 两数之和
 */
import React, { Component } from 'react';
import { Collapse, Divider } from 'antd';
import Highlight from 'react-highlight'

const Panel = Collapse.Panel;

class Demo1 extends Component {
  constructor(props){
    super(props);
  }

  render() {

    let code1 = '/**\n' +
      ' * @param {number[]} nums\n' +
      ' * @param {number} target\n' +
      ' * @return {number[]}\n' +
      ' */\n' +
      'var twoSum = function(nums, target) {\n' +
      '    for(var i=0; i< nums.length; i++){\n' +
      '      for(var j=i+1; j< nums.length; j++){\n' +
      '        if(nums[i]+ nums[j] === target){\n' +
      '           return [i,j];\n' +
      '        }\n' +
      '      }\n' +
      '    }\n' +
      '};';

    let code2 = '/**\n' +
      ' * @param {number[]} nums\n' +
      ' * @param {number} target\n' +
      ' * @return {number[]}\n' +
      ' */\n' +
      'var twoSum = function(nums, target) {\n' +
      '  const length = nums.length;\n' +
      '  let hash = new Map();\n' +
      '  let index = 0;\n' +
      '  for (index = 0; index < length; index++) {\n' +
      '    hash.set(nums[index], index);\n' +
      '  }\n' +
      '  let numToFind;\n' +
      '  for( index = 0; index < length; index++) {\n' +
      '    numToFind = target - nums[index];\n' +
      '    if (hash.has(numToFind) && index !== hash.get(numToFind)) {\n' +
      '      return [index, hash.get(numToFind)];\n' +
      '    }\n' +
      '  }\n' +
      '};\n';

    return (
      <div>
        <Collapse defaultActiveKey="1">
          <Panel header={'两数之和'} key="1" disabled>
            <Divider orientation="left">【题目描述】</Divider>
            <p>给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的 两个 <b>整数</b>。</p>
            <p>你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。</p>
            <Divider orientation="left">【实例】</Divider>
            <p>给定 nums = [2, 7, 11, 15], target = 9</p>
            <p>因为 nums[0] + nums[1] = 2 + 7 = 9</p>
            <p>所以返回 [0, 1]</p>
          </Panel>
        </Collapse>
        <br/>
        <Collapse>
          <Panel header={'解法一: 暴力法'}>
            <Divider orientation="left">【思路】</Divider>
            <p>双层循环</p>
            <Divider orientation="left">【代码】</Divider>
            <Highlight language="javascript">
              {code1}
            </Highlight>
          </Panel>
        </Collapse>
        <br/>
        <Collapse>
          <Panel header={'解法二: 哈希表'}>
            <Divider orientation="left">【思路】</Divider>
            <p>哈希表</p>
            <Divider orientation="left">【代码】</Divider>
            <Highlight language="javascript">
              {code2}
            </Highlight>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default Demo1;

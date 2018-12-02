/**
 * Created with wangyonghua.
 * Date: 2018-11-24
 * Time: 22:40
 * Desc: 两数相加
 */
import React, { Component } from 'react';
import { Collapse, Divider } from 'antd';
import Highlight from 'react-highlight'

const Panel = Collapse.Panel;

class Demo2 extends Component {
  constructor(props){
    super(props);
  }

  render() {

    let code = '/**\n' +
      ' * Definition for singly-linked list.\n' +
      ' * function ListNode(val) {\n' +
      ' *     this.val = val;\n' +
      ' *     this.next = null;\n' +
      ' * }\n' +
      ' */\n' +
      '/**\n' +
      ' * @param {ListNode} l1\n' +
      ' * @param {ListNode} l2\n' +
      ' * @return {ListNode}\n' +
      ' */\n' +
      'var addTwoNumbers = function(l1, l2) {\n' +
      '  //定义一个新链表res，一个temp的链表cur，用来当作res的指针，一个进位标志carry\n' +
      '  let res = new ListNode(-1),\n' +
      '    cur = res,\n' +
      '    carry = 0;\n' +
      '  while(l1 !== null || l2 !== null){\n' +
      '    //取到两个链表当前的数值\n' +
      '    let num1 = l1 == null ? 0 : l1.val;\n' +
      '    let num2 = l2 == null ? 0 : l2.val;\n' +
      '    //求和\n' +
      '    let sum = num1 + num2 + carry;\n' +
      '    //对进位标志的验证\n' +
      '    carry = sum >= 10 ? 1 : 0;\n' +
      '    cur.next = new ListNode(sum % 10);\n' +
      '    cur = cur.next;\n' +
      '    l1 = l1 ? l1.next : l1;\n' +
      '    l2 = l2 ? l2.next : l2;\n' +
      '  }\n' +
      '  if (carry === 1) {\n' +
      '    cur.next = new ListNode(1);\n' +
      '  }\n' +
      '  return res.next;\n' +
      '};';


    return (
      <div>
        <Collapse defaultActiveKey="1">
          <Panel header={'两数相加'} key="1" disabled>
            <Divider orientation="left">【题目描述】</Divider>
            <p>给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。</p>
            <p>如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。</p>
            <p>您可以假设除了数字 0 之外，这两个数都不会以 0 开头。</p>
            <Divider orientation="left">【实例】</Divider>
            <p>输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)</p>
            <p>输出：7 -> 0 -> 8</p>
            <p>原因：342 + 465 = 807</p>
          </Panel>
        </Collapse>
        <br/>
        <Collapse>
          <Panel header={'解法一'}>
            <Divider orientation="left">【思路】</Divider>
            <p>输入两个链表，输出一个链表。则需要新建一个链表，把输入的两个链表从头开始，每两个数值相加，添加一个新节点到新链表后面。需要考虑两个数相加时产生的进位，以及最高位的进位</p>
            <Divider orientation="left">【代码】</Divider>
            <Highlight language="javascript">
              {code}
            </Highlight>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default Demo2;

# BPMN

## 参考资料

[BPMN 业务流程建模符号](https://www.zhihu.com/search?type=content&q=bpmn)

[BPMN 官网](https://www.bpmn.org/)

[Bpmn.js 中文文档一](https://juejin.cn/post/6900793894263488519)

[Bpmn.js 中文文档二](https://juejin.cn/post/6925304166638174216)

[在线 BPMN 编辑器](https://miyuesc.gitee.io/process-designer/)

[新到楼二层一键开关站](http://172.51.215.159:30084/#/changeStatus)

## BPMN 概况

BPMN（Business Process Modeling Notation，即业务流程建模符号），是一种流程建模的通用和标准语言，用来绘制业务流程图，以便更好地让各部门之间理解业务流程和相互关系。

它有两个版本：

- BPMN 1.0 规范由标准组织 BPMI（后并入到 OMG）于 2004 年 5 月发布；
- BPMN 2.0 标准由 OMG 于 2011 年推出。

Bpmn 的目标人群是:

- 负责流程实施的技术专家;
- 创建和改进流程的业务分析师;
- 监控和控制流程的经理。

Bpmn 使用简单的图形符号将业务流程可视化为图表。这些图形元素对用户来说是直观的, 允许他们构建复杂的语义结构。业务用户发现使用表示为关系图的流程非常方便, 许多分析师为此使用 Bpmn 。

使用 Bpmn 设计的所有过程模型都是可执行的, 而不仅仅是在纸上描述的, 这意味着它们可以在任何 bpm 系统中运行。计算机程序将关系图转换为实时运行的实际可执行进程。

## BPMN 基础元素类别

### 流对象

事件 （指的是在业务流程的运行过程中发生的事情）

- 开始：表示一个流程的开始
- 中间：发生的开始和结束事件之间，影响处理的流程，但不会启动或（直接）终止进程
- 结束：表示该过程结束

![事件](https://i.bmp.ovh/imgs/2021/11/08748f12f7762ccd.png)

活动

- 任务（Task）：是流程中包含的原子活动。当流程中的工作无法细分到更详细的级别时，使用任务。任务可以由最终用户或者应用程序执行。
- 子流程（Sub Process）： 子流程是流程中包含的另一个流程，可以是折叠或者展开的状态。

![活动](https://i.bmp.ovh/imgs/2021/11/b873c242b6f7a4c4.png)

网关

- 独占网关 发散的独占网关（决策）用于在流程流中创建路径，标识流程“道路上的分流点”。
- 并行网关 并行网关用于同步（组合）并行流并创建并行流。

![网关](https://i.bmp.ovh/imgs/2021/11/b9db95949148787e.png)

### 连接对象

### 泳道

许多建模技术利用泳道这个概念将活动划分到不同的可视化类别中来描述由不同的参与者的责任与职责。BPMN 支持 2 种主要的泳道构件

- 池：池描述流程中的一个参与者。可以看做是将一系列活动区别于其他池的一个图形容器，一般用于 B2B 的上下文中。
- 道：道就是在池里面再细分，可以是垂直的也可以是水平的。道也是用于组织和分类活动。

![池](https://i.bmp.ovh/imgs/2021/11/b44561973b6500ca.png)

### 人工信息

人工信息添加到建模的业务流程上下文中作为信息备注，便于人员理解，当前 BPMN 规范的版本预定义了 3 种人工信息

- 数据对象：数据对象是一个显示活动是如何需要或产生数据的。它们通过关联与活动连接起来。
- 组：组用一个虚线的圆角矩形表示，用于记录或分析的目的，但不影响顺序流。
- 注释：注释是建模者为 BPMN 图的读者提供附加文本信息的一个机制。

![人工信息](https://i.bmp.ovh/imgs/2021/11/7c402b43c02bf5d6.png)

### 示例

```html
<!-- 步骤 -->
<bpmn2:process
  id="Process_1637630428551"
  name="业务流程_1637630428551"
  isExecutable="true"
>
  <bpmn2:userTask
    id="Activity_1fok3wu"
    name="设备自检"
    camunda:asyncBefore="true"
    camunda:formKey="biaoshi"
    camunda:assignee="user1"
    camunda:candidateUsers="user1"
    camunda:candidateGroups="group1"
    camunda:dueDate="111"
    camunda:followUpDate="222"
    camunda:priority="1"
  >
    <bpmn2:documentation>设备自检包含 电梯门帘 </bpmn2:documentation>
    <bpmn2:extensionElements>
      <camunda:executionListener class="java" event="start" />
      <camunda:taskListener class="bbb" event="create" id="aaa" />
      <camunda:formData businessKey="">
        <camunda:formField
          id="444"
          label="444"
          type="long"
          defaultValue="444"
        />
        <camunda:formField
          id="id1"
          label="key"
          type="long"
          defaultValue="wang"
        />
      </camunda:formData>
    </bpmn2:extensionElements>
  </bpmn2:userTask>
</bpmn2:process>
<!-- 图解 -->
<bpmndi:BPMNDiagram id="BPMNDiagram_1">
  <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1637630428551">
    <bpmndi:BPMNShape id="Activity_1fok3wu_di" bpmnElement="Activity_1fok3wu">
      <dc:Bounds x="630" y="190" width="100" height="80" />
    </bpmndi:BPMNShape>
  </bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
```

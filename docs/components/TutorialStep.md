# TutorialStep

```
<tutorial>
  <tutorial-section>
    <tutorial-step>...</tutorial-step>
  </tutorial-section>
</tutorial>
```

The tutorial-step component represents a single step in your tutorial.

![Screen Shot 2020-08-25 at 11 19 12 AM](https://user-images.githubusercontent.com/611996/91201382-fe713800-e6c5-11ea-8725-03f1a3ca169d.png)
<br>
_Pictured above: An example step_

On the left side of the screen, the current step's `default` slot content is shown in a highlighted box (1), with the number of the step within the section displayed above (2).

On the right side of the screen, the current step's `aside` slot content is shown (3). This aside often contains a tutorial-highlighter component, but can hold anything. Using the html tag aside for this slot is recommended to get centered content. E.g. `<aside slot="aside"></aside>`.

The slot `after` can be used to display content below the step box, i.e. notes etc (4).
## Slots

<!-- @vuese:TutorialStep:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|name|The name of the step|"Step #"|
|default|The content of the step box|-|
|aside|The content to put aside the step box (or below on mobile)|-|
|after|Content to display after and outside the step box|-|

<!-- @vuese:TutorialStep:slots:end -->



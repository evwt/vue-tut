# TutorialHighlighter

```
<tutorial>
  <tutorial-section>
    <tutorial-step>
      ...
      <tutorial-highlighter
        slot="aside"
        text="let foo = 'bar';"
        :highlight-lines="[1]"
        lang="javascript" />
    </tutorial-step>
  </tutorial-section>
</tutorial>
```

Highlight lines of text with line numbers or regexes.

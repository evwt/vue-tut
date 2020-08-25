# TutorialSection

```
<tutorial>
  <tutorial-section>...</tutorial-section>
</tutorial>
```

The tutorial-section component is a way to group a tutorial into sections - like chapters in a book.

A tutorial needs at least one section, but you should try to have multiple to make the tutorial easier to consume for readers.

The following slots are available to customize a section.
## Slots

<!-- @vuese:TutorialSection:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|name|The name of the section, displayed in a smaller font above the title|"Section #""|
|title|The title of the section|-|
|intro|The introduction paragraph for the section|-|
|step|Add one or more `TutorialStep` components to this slot|-|

<!-- @vuese:TutorialSection:slots:end -->



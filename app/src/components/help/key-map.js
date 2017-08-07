export default [

  {
    name: 'Run',
    keys: {
      pc: ['Ctrl-Enter'],
      mac: ['Cmd-Enter'],
    },
    description: 'Executes the current content of the editor.'
  },

  {
    name: 'Save',
    keys: {
      pc: ['Ctrl-S'],
      mac: ['Cmd-S'],
    },
    description: 'Persists the current UI state to storage.'
  },

  {
    name: 'Auto Complete',
    keys: {
      all: ['Ctrl-Space'],
    },
    description: 'Completes the term before the cursor, or opens a list of terms to choose from.'
  },

  {
    name: 'Toggle Comment',
    keys: {
      pc: ['Ctrl-/'],
      mac: ['Cmd-/'],
    },
    description: 'Toggles a line comment on the current line.'
  },

  {
    name: 'Indent Auto',
    keys: {
      all: ['Shift-Tab'],
    },
    description: 'Auto-indent the current line or selection.'
  },

  {
    name: 'Transpose Chars',
    keys: {
      mac: ['Ctrl-T'],
    },
    description: 'Swap the characters before and after the cursor.'
  },

  {
    name: 'Delete Line',
    keys: {
      pc: ['Ctrl-D'],
      mac: ['Cmd-D'],
    },
    description: 'Deletes the whole line under the cursor, including newline at the end.'
  },

  {
    name: 'Undo',
    keys: {
      pc: ['Ctrl-Z'],
      mac: ['Cmd-Z'],
    },
    description: 'Undo the last change.'
  },

  {
    name: 'Redo',
    keys: {
      pc: ['Ctrl-Y'],
      mac: ['Shift-Cmd-Z', 'Cmd-Y'],
    },
    description: 'Redo the last undone change.'
  },

  {
    name: 'Select All',
    keys: {
      pc: ['Ctrl-A'],
      mac: ['Cmd-A'],
    },
    description: 'Select the whole content of the editor.'
  },

  {
    name: 'Single Selection',
    keys: {
      all: ['Esc'],
    },
    description: 'When multiple selections are present, this deselects all but the primary selection (you can make multiple selections, by the way).'
  },

  {
    name: 'Undo Selection',
    keys: {
      pc: ['Ctrl-U'],
      mac: ['Cmd-U'],
    },
    description: 'Undo the last change to the selection, or if there are no selection-only changes at the top of the history, undo the last change.'
  },

  {
    name: 'Redo Selection',
    keys: {
      pc: ['Alt-U'],
      mac: ['Shift-Cmd-U'],
    },
    description: 'Redo the last change to the selection, or the last text change if no selection changes remain.'
  },

]

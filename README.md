 Features Implemented

Add Tasks: Input field + button (or Enter key) to add tasks
.

Edit Tasks: Inline edit using prompt() (replaceable with modal/inline forms)
.

Delete Tasks: Remove tasks with confirmation dialogs
.

Mark Complete: Checkbox toggles between Pending and Completed
.

Filters: Buttons to show All, Completed, or Pending tasks
.

Search: Filter tasks by title with search bar + Enter key support
.

Persistence: Custom hook useLocalStorage keeps tasks saved after refresh
.

Dark/Light Mode: Toggle button in Header switches between themes
.

Responsive UI: Layout adapts for desktop and mobile (.contenair, .taskManager).

Accessibility: Labeled inputs, proper roles for buttons and forms.

 Decisions Made

Component Structure:

App.js manages state and orchestrates components
.

Header handles theme toggle
.

TaskTable, TaskRow, and TableHeader separate task display concerns
.

Search handles both status filtering and text search
.

useLocalStorage custom hook centralizes persistence logic
.

Styling Choice:

Used plain CSS (style.css) for simplicity and responsiveness.

Classes like .task-table, .strike, .add-button maintain a consistent style.

Editing Approach:

Chose window.prompt() for quick inline editing (simple but blocking).

Can be improved with inline inputs or modal dialogs for better UX.

State Management:

Used React’s built-in useState and useEffect with localStorage.


 This project demonstrates React fundamentals: hooks, state, controlled components, side effects, and component composition — while also practicing persistence and theming.

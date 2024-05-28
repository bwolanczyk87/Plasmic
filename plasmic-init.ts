import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { HelloWorld } from './components/HelloWorld';
import { TestWorld } from './components/TestWorld';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "hJGJqgHDw9NPkFqsHJiLD1",  // ID of a project you are using
      token: "lzWyzmh9xY24i839akckI6OkqqSA5SZTeE4bVCYr5ny03CZnnf8DbuUcD3uroo8SBDzNY2eXsDW21IwmkCg"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})

PLASMIC.registerComponent(HelloWorld, {
  name: 'HelloWorld',
  props: {
    verbose: 'boolean',
    children: 'slot'
  }
});

PLASMIC.registerComponent(TestWorld, {
  name: 'TestWorld',
  props: {
    verbose: 'boolean',
    children: 'slot'
  }
});
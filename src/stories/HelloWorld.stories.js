import HelloWorld from "../components/HelloWorld.vue";

// 👇 This default export determines where your story goes in the story list
export default {
  title: "HelloWorld",
  component: HelloWorld,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) =>
  ({
    components: { HelloWorld },
    setup() {
      return { args };
    },
    template: `<div style="--main-width: 20px;">
        <HelloWorld 
          v-bind="args" 
        />
      </div>`,
  });

export const Default = Template.bind({});
Default.args = {
  toggle: true,
};
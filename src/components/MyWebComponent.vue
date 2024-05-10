<template>
  <div :style="customStyle" class="my-web-component">
    <h1>My Vue Web Component by Sumu</h1>
    <div>{{ msg }}</div>
    <div>{{ content }}</div>
    <div>{{ emojiContent }}</div>
  </div>
</template>

<script>
export default {
  name: "my-web-component",
  props: {
    msg: String,
    content: String,
    emoji: {
      type: String,
      default: "surprised",
    },
    backgroundColor: {
      type: String,
      default: "#0093E9",
    },
    borderColor: {
      type: String,
      default: "#8A2BE2",
    },
    borderWidth: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    customStyle() {
      return {
        "--background-color": this.backgroundColor, // CSS custom properties
        "--border-color": this.borderColor,
        "--border-width": `${this.borderWidth}px`,
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      };
    },
    emojiContent() {
      switch (this.emoji) {
        case "happy":
          return "😀";
        case "sad":
          return "😢";
        case "angry":
          return "😠";
        case "surprised":
          return "😮";
        default:
          return "😀";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.my-web-component {
  background-color: var(--background-color);
  border-color: var(--border-color);
  border-width: var(--border-width);
  border-style: solid;
  padding: var(--padding);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

my-web-component::before {
  content: var(--emoji-content);
  font-size: 24px;
}
</style>

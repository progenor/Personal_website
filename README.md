# Mi kell

- Contact

  - insta
  - email
  - phone
  - github

- members

  - lori es en CV

- home

  - image/anim
  - logo

- ## about
  -

## _Animation in view_

```jsx
const { ref, inView } = useInView();
const animation = useAnimation();

const mView = window.innerWidth < 740;

useEffect(() => {
  if (inView && !mView) {
    animation.start("visible");
  } else {
    animation.start("hidden");
  }

  if (mView) {
    animation.start({ opacity: 1, x: 0 });
  }
});
```

## _Animation Variants_

```jsx
const leftContainer = {
  hidden: {
    opacity: 0,
    x: "-40vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};
```

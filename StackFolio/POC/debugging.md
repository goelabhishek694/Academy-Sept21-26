# Debugging Flowchart

When Flexbox is not working as expected, check these five things in order:

1. **Is `display: flex` on the right parent?** Inspect the element in DevTools and look for the flex badge.
2. **Are the items you expect to move actually direct children?** If they are grandchildren, they will not be affected.
3. **Is there extra space for alignment to work?** `justify-content` needs extra space on the main axis. `align-items` needs extra space on the cross axis.
4. **Is `flex-wrap` set?** If items are shrinking instead of wrapping, you probably need `flex-wrap: wrap`.
5. **Is `flex-direction` what you think it is?** If the axes are flipped, alignment properties will behave differently than expected.

## AI Moment

This is a good time for an AI code review exercise.

Take your current StackFolio CSS (just the Flexbox-related parts) and ask AI to review it.

### Verification checklist

| Check | Question |
| --- | --- |
| Understand | Do I understand what the AI is pointing out? |
| Need | Is this feedback relevant to what I have built, or is AI suggesting something beyond my current scope? |
| Verify | Can I check each point in DevTools to confirm if it is actually an issue? |
| Scope | Is the suggestion within the Flexbox concepts I have learned today? |



function unsubscribeFromDiscussions() {
    const buttons = document.querySelectorAll('.discussion-post-subscribe button[aria-pressed="true"]');

    buttons.forEach(button => {
        console.log("Unsubscribing from discussion post...");
        button.click();
    });

    if (buttons.length === 0) {
        console.log("No active subscriptions found.");
    }
}

// Run the function on page load
unsubscribeFromDiscussions();

// Also check dynamically for new discussion posts
const observer = new MutationObserver(() => {
    unsubscribeFromDiscussions();
});
observer.observe(document.body, { childList: true, subtree: true });

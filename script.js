// Get the pain type from the URL
const params = new URLSearchParams(window.location.search);
const painType = params.get('type');

// Define pain-specific exercises with images
const exercises = {
    back: {
        title: 'Back Pain Relief Exercises',
        content: `<p>Here are some exercises to relieve back pain:</p>
                  <div>
                      <h3>Cat-Cow Pose</h3>
                      <img src="images/Cat-Cow.jpg" alt="Cat-Cow Pose" style="width:200px">
                      <p>The Cat-Cow Pose helps to stretch and strengthen the spine.</p>

                      <h3>Child’s Pose</h3>
                      <img src="images/child pose.jpg" alt="Child's Pose" style="width:200px">
                      <p>Child’s Pose is a great way to gently stretch your lower back and hips.</p>

                      <h3>Bridge Pose</h3>
                      <img src="images/bridge pose.jpg" alt="Bridge Pose">
                      <p>Bridge Pose helps to strengthen the lower back and improve flexibility.</p>
                  </div>`
    },
    neck: {
        title: 'Neck Pain Relief Exercises',
        content: `<p>Here are some exercises to relieve neck pain:</p>
                  <div>
                      <h3>Neck Stretches</h3>
                      <img src="images/neck_stretch.jpg" alt="Neck Stretches">
                      <p>Gentle neck stretches can relieve tension in the neck muscles.</p>

                      <h3>Thread the Needle Pose</h3>
                      <img src="images/thread_needle_pose.jpg" alt="Thread the Needle Pose">
                      <p>This pose helps to open the shoulders and stretch the upper back.</p>
                  </div>`
    }
    // Add more exercises for shoulder and knee pain
};

// If a valid pain type is found, display the corresponding exercises
if (painType && exercises[painType]) {
    document.getElementById('pain-title').textContent = exercises[painType].title;
    document.getElementById('exercise-info').innerHTML = exercises[painType].content;
} else {
    document.getElementById('pain-title').textContent = 'Pain Not Found';
    document.getElementById('exercise-info').innerHTML = '<p>Please go back and select a valid type of pain.</p>';
}

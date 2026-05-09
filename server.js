const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/api/status', (req, res) => {

    const data = {
        github: "Success",
        codebuild: Math.random() > 0.5 ? "Running" : "Completed",
        docker: "Active",
        deployment: "Success",
        containers: Math.floor(Math.random() * 5) + 1,
        cpu: Math.floor(Math.random() * 100) + "%"
    };

    res.json(data);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
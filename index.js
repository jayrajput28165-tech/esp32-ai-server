const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// રોબોટ કનેક્ટ છે કે નહીં તે ચેક કરવા માટે
app.get('/', (req, res) => {
    res.send('ESP32 AI Robot Server is Running!');
});

// વોઈસ કમાન્ડ પ્રોસેસ કરવા માટેનો રૂટ
app.post('/command', (req, res) => {
    const { voiceText } = req.body;
    console.log("Received Voice:", voiceText);
    
    // અહિયાં આપણે રોબોટ માટે બેઝિક કમાન્ડ સેટ કરીએ છીએ
    let action = "unknown";
    if (voiceText.includes("forward") || voiceText.includes("આગળ")) {
        action = "move_forward";
    } else if (voiceText.includes("stop") || voiceText.includes("ઊભો રહે")) {
        action = "stop";
    }

    res.json({ success: true, action: action });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

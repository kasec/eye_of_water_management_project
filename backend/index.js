const express = require("express");
const app = express();
const port = 3000;
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://sjgcphkymhrezykqnzze.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// API REST
app.get("/api/users", async (req, res) => {
    try {
        console.log('Fetching users');

        const { data, error } = await supabase
            .from('users')
            .select()

        if (error) {
            throw new Error(error);
        }

        res.json({ data });
    } catch (err) {
        console.error('An error fetching users was found', err);
        res.status(500).json({ message: 'An error fetching users was found' });
    }
});
app.get("/api/clients", (req, res) => {
    res.json({
        clients: [
            { name: "Azael" },
            { name: "Joel" },
            { name: "PEdro" },
            { name: "Ramiro" },
            { name: "Joaquin" },
            { name: "JEsus" },
        ],
    });
});

app.listen(port, () => {
    console.log(`API -- listening on port ${port}`);
});
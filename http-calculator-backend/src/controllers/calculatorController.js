class CalculatorController {
    add(req, res) {
        const { a, b } = req.body || req.query;
        const result = Number(a) + Number(b);
        res.json({ result });
    }

    subtract(req, res) {
        const { a, b } = req.body || req.query;
        const result = Number(a) - Number(b);
        res.json({ result });
    }

    multiply(req, res) {
        const { a, b } = req.body || req.query;
        const result = Number(a) * Number(b);
        res.json({ result });
    }

    divide(req, res) {
        const { a, b } = req.body || req.query;
        if (Number(b) === 0) {
            return res.status(400).json({ error: 'Division by zero is not allowed.' });
        }
        const result = Number(a) / Number(b);
        res.json({ result });
    }
}

module.exports = new CalculatorController();
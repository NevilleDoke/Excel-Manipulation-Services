from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/v1/products', methods=['GET'])
def get_products():
    products = [
        {'id': 1, 'name': 'Product 1', 'price': 199.99},
        {'id': 2, 'name': 'Product 2', 'price': 299.99},
        {'id': 3, 'name': 'Product 3', 'price': 399.99}
    ]
    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)
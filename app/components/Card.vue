<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">Card Title</h2>
            </div>
            <div class="card-body">
                <p class="card-text">This is a beautiful card with some descriptive text.</p>
            </div>
            <div class="card-footer">
                <button class="card-button">Learn More</button>
            </div>
        </div>
    </div>
</template>
  <style scoped>
        .card {
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            max-width: 400px;
            margin: 16px auto;
            background-color: #fff;
        }
        .card-header {
            background-color: #f5f5f5;
            padding: 16px;
            border-bottom: 1px solid #ddd;
        }
        .card-title {
            margin: 0;
            font-size: 1.5rem;
            color: #333;
        }
        .card-body {
            padding: 16px;
        }
        .card-text {
            margin: 0;
            font-size: 1rem;
            color: #555;
        }
        .card-footer {
            padding: 16px;
            border-top: 1px solid #ddd;
            text-align: right;
        }
        .card-button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
        }
        .card-button:hover {
            background-color: #0056b3;
        }
        </style>
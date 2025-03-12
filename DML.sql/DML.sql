-- Insert data into CUSTOMER table
INSERT INTO CUSTOMER (CustomerID, CustomerName, ContactNumber, Email)
VALUES (1, 'John Doe', '123-456-7890', 'john.doe@example.com');

INSERT INTO CUSTOMER (CustomerID, CustomerName, ContactNumber, Email)
VALUES (2, 'Jane Smith', '987-654-3210', 'jane.smith@example.com');

-- Insert data into PRODUCT table
INSERT INTO PRODUCT (ProductID, ProductName, Price, StockQuantity, Category)
VALUES (101, 'Laptop', 1200.00, 10, 'Electronics');

INSERT INTO PRODUCT (ProductID, ProductName, Price, StockQuantity, Category)
VALUES (102, 'Smartphone', 800.00, 15, 'Electronics');

INSERT INTO PRODUCT (ProductID, ProductName, Price, StockQuantity, Category)
VALUES (103, 'Headphones', 150.00, 20, 'Accessories');

-- Insert data into ORDERS table
INSERT INTO ORDERS (OrderID, CustomerID, OrderTotal, OrderDate)
VALUES (1001, 1, 1200.00, TO_DATE('2023-10-01', 'YYYY-MM-DD'));

INSERT INTO ORDERS (OrderID, CustomerID, OrderTotal, OrderDate)
VALUES (1002, 2, 950.00, TO_DATE('2023-10-02', 'YYYY-MM-DD'));

-- Insert data into ORDERDETAILS table
INSERT INTO ORDERDETAILS (OrderDetailsID, OrderID, ProductID, Quantity, Subtotal)
VALUES (1, 1001, 101, 1, 1200.00);

INSERT INTO ORDERDETAILS (OrderDetailsID, OrderID, ProductID, Quantity, Subtotal)
VALUES (2, 1002, 102, 1, 800.00);

INSERT INTO ORDERDETAILS (OrderDetailsID, OrderID, ProductID, Quantity, Subtotal)
VALUES (3, 1002, 103, 1, 150.00);

-- Verify CUSTOMER table
SELECT * FROM CUSTOMER;

-- Verify PRODUCT table
SELECT * FROM PRODUCT;

-- Verify ORDERS table
SELECT * FROM ORDERS;

-- Verify ORDERDETAILS table
SELECT * FROM ORDERDETAILS;
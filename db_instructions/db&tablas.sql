/* TABLAS DE LOS USUARIOS*/
CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    fname VARCHAR(20) NOT NULL,
    sname VARCHAR(20) NOT NULL,
    fullname VARCHAR(40) NOT NULL,
);
ALTER TABLE users
    ADD PRIMARY KEY (id);
ALTER TABLE post
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;



/* TABLA DE LOS POST Y PUBLICACIONES EN EL BLOG. */
CREATE TABLE post(
    id INT(11) NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE post
    ADD PRIMARY KEY (id);
ALTER TABLE post
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
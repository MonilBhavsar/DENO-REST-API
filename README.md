# DENO-REST-API

## A Simple REST API using DENO 1.0 with TypeScript & Oak Framework

### 🚀 Running the App

```
deno run app.ts
```
or by setting flags

```
deno run --allow-env --allow-net app.ts
```
### 🔁 Requests

1. **GET /students** : List All the students

2. **GET /students/{roll_no}** : List requested student details, returns error if not found.

3. **POST /students** : Adds a new student

4. **PUT /students/{roll_no}** : Updates requested students details, returns error if not found.

5. **DELETE /students/{roll_no}** : Deletes requested students detail, returns error if not found.

### ✅ Reviews

1. Finally got rid of bulky node packages, Now one can import packages directly through url. 
2. Highly secured, Only permission based access for folders and environment variables.
3. Fast as designed on Rust.

Line by Line Guide [here](https://codehexz.com/blog/getting-started-with-deno/).

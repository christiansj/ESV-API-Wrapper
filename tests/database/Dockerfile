FROM python:3

WORKDIR /usr/src/database-tests

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
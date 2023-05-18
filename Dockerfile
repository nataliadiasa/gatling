FROM grafana/k6

ARG script
ENV SCRIPT=$script

COPY . /app

CMD ["/bin/sh"]

ENTRYPOINT k6 run /app/$SCRIPT
from django.db import models
from django.core.validators import MinValueValidator


class Hello(models.Model):
    world = models.CharField(max_length=100)
    population = models.BigIntegerField(validators=[MinValueValidator(0)])

    class Meta:
        db_table = "hello"

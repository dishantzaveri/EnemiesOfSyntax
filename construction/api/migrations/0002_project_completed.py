# Generated by Django 3.2.9 on 2022-03-26 12:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='completed',
            field=models.BooleanField(default=False),
        ),
    ]

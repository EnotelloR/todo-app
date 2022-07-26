import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('Tasks test', () => {
  test('Basic check', () => {
    render(<App />);
    expect(screen.queryByText('Прекрасный код')).toBeInTheDocument();
  });
  test('Testing adding a task', () => {
    render(<App />);
    expect(screen.queryByText('Пройти на вакансию')).not.toBeInTheDocument()
    const input = screen.getByPlaceholderText(/Введите задание/i)
    const button = screen.getByText(/Добавить/i)
    fireEvent.input(input, {target: {value: "Пройти на вакансию"}})
    fireEvent.click(button)
    expect(screen.queryByText('Пройти на вакансию')).toBeInTheDocument();
  });
  test('Testing removing of all completed tasks', () => {
    render(<App />);
    expect(screen.queryByText('Прекрасный код')).toBeInTheDocument();
    const button = screen.getByText(/Очистить выполненные задачи/i)
    fireEvent.click(button)
    expect(screen.queryByText('Прекрасный код')).not.toBeInTheDocument()
  });
  test('Testing filtering by a completed', () => {
    render(<App />);
    expect(screen.queryByText('Тестовое задание')).toBeInTheDocument();
    expect(screen.queryByText('Покрытие тестами')).toBeInTheDocument();
    const button = screen.getByText(/Завершённые/i)
    fireEvent.click(button)
    expect(screen.queryByText('Тестовое задание')).not.toBeInTheDocument();
    expect(screen.queryByText('Покрытие тестами')).not.toBeInTheDocument();
  });
  test('Testing task opening', () => {
    render(<App />);
    expect(screen.queryByText('Открыть задачу')).toBeInTheDocument();
    const button = screen.getByText(/Открыть задачу/i)
    fireEvent.click(button)
    expect(screen.queryByText('Открыть задачу')).not.toBeInTheDocument();
  });
})
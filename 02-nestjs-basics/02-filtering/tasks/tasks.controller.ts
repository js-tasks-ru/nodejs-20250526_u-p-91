import { Controller, Get, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { TaskStatus, SortBy } from "./task.model";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(
    @Query("status") status?: TaskStatus,
    @Query("page") page?: number,
    @Query("limit") limit?: number,
    @Query("sortBy") sortBy?: SortBy
  ) {
    return this.tasksService.getFilteredTasks(status, page, limit, sortBy);
  }
}
